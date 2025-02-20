# Advanced Neumorphic Design Patterns

## 1. Multi-Step Form with Progress

````tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormStep {
  id: string;
  title: string;
  component: React.ComponentType<StepProps>;
  validationSchema?: unknown;
}

interface StepProps {
  onNext: (data: unknown) => void;
  onPrev: () => void;
  data: Record<string, unknown>;
}

interface MultiStepFormProps {
  steps: FormStep[];
  onComplete: (data: Record<string, unknown>) => void;
  initialData?: Record<string, unknown>;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({
  steps,
  onComplete,
  initialData = {}
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialData);

  const handleNext = (stepData: unknown) => {
    const newData = { ...formData, ...stepData };
    setFormData(newData);

    if (currentStep === steps.length - 1) {
      onComplete(newData);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="bg-surface rounded-default shadow-raised p-6 dark:bg-surface">
      {/* Progress Bar */}
      <div className="flex gap-2 mb-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`
              flex-1 h-2 rounded-full transition-colors duration-200
              ${index <= currentStep ? 'bg-accent' : 'bg-surface shadow-pressed'}
            `}
          />
        ))}
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={steps[currentStep].id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <CurrentStepComponent
            onNext={handleNext}
            onPrev={() => setCurrentStep(prev => prev - 1)}
            data={formData}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

## 2. Advanced Data Grid with Virtual Scrolling

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef, useState } from 'react';

interface Column<T> {
  id: string;
  header: string;
  accessor: keyof T | ((row: T) => string | number);
  width?: number;
  sortable?: boolean;
}

interface DataGridProps<T> {
  data: T[];
  columns: Column<T>[];
  rowHeight?: number;
  className?: string;
  onRowClick?: (row: T) => void;
}

export function DataGrid<T extends { id: string | number }>({
  data,
  columns,
  rowHeight = 48,
  className = '',
  onRowClick
}: DataGridProps<T>) {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => rowHeight,
    overscan: 5
  });

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return data;

    return [...data].sort((a, b) => {
      const aValue = a[sortConfig.key as keyof T];
      const bValue = b[sortConfig.key as keyof T];
      return sortConfig.direction === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }, [data, sortConfig]);

  return (
    <div
      ref={parentRef}
      className={`
        bg-surface rounded-default shadow-raised overflow-hidden
        dark:bg-surface dark:shadow-raised ${className}
      `}
    >
      {/* Header */}
      <div className="flex border-b border-b-surface/10">
        {columns.map(column => (
          <div
            key={column.id}
            className={`
              p-4 font-medium text-text dark:text-text
              ${column.sortable ? 'cursor-pointer hover:bg-surface/5' : ''}
            `}
            style={{ width: column.width || 'auto' }}
            onClick={() => {
              if (column.sortable) {
                setSortConfig(prev => ({
                  key: column.accessor as keyof T,
                  direction: prev.direction === 'asc' ? 'desc' : 'asc'
                }));
              }
            }}
          >
            <div className="flex items-center gap-2">
              {column.header}
              {column.sortable && sortConfig.key === column.accessor && (
                <span>{sortConfig.direction === 'asc' ? '↑' : '↓'}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Virtualized Rows */}
      <div
        className="relative"
        style={{ height: `${virtualizer.getTotalSize()}px` }}
      >
        {virtualizer.getVirtualItems().map(virtualRow => {
          const row = sortedData[virtualRow.index];
          return (
            <div
              key={row.id}
              className={`
                absolute top-0 left-0 flex w-full
                hover:bg-surface/5 transition-colors duration-200
                ${onRowClick ? 'cursor-pointer' : ''}
              `}
              style={{
                height: `${rowHeight}px`,
                transform: `translateY(${virtualRow.start}px)`
              }}
              onClick={() => onRowClick?.(row)}
            >
              {columns.map(column => (
                <div
                  key={column.id}
                  className="p-4 flex items-center"
                  style={{ width: column.width || 'auto' }}
                >
                  {typeof column.accessor === 'function'
                    ? column.accessor(row)
                    : String(row[column.accessor])}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

## 3. Drag and Drop Kanban Board

```tsx
import { DndContext, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { SortableContext, useSortable } from '@dnd-kit/sortable';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface KanbanProps {
  columns: Column[];
  onTaskMove: (taskId: string, sourceCol: string, targetCol: string) => void;
}

export const Kanban: React.FC<KanbanProps> = ({ columns, onTaskMove }) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const taskId = active.id as string;
      const sourceCol = active.data.current?.sortable.containerId;
      const targetCol = over.data.current?.sortable.containerId;

      if (sourceCol !== targetCol) {
        onTaskMove(taskId, sourceCol, targetCol);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-6 p-6 overflow-x-auto">
        {columns.map(column => (
          <div
            key={column.id}
            className="
              bg-surface rounded-default shadow-raised p-4
              dark:bg-surface dark:shadow-raised
              min-w-[300px] w-[300px]
            "
          >
            <h3 className="text-text dark:text-text font-medium mb-4">
              {column.title}
            </h3>

            <SortableContext items={column.tasks.map(t => t.id)}>
              <div className="space-y-3">
                {column.tasks.map(task => (
                  <SortableTask key={task.id} task={task} />
                ))}
              </div>
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );
};

interface SortableTaskProps {
  task: Task;
}

const SortableTask: React.FC<SortableTaskProps> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: task.id });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    transition,
    zIndex: isDragging ? 1 : undefined,
  } : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-surface rounded-default p-3
        ${isDragging ? 'shadow-lg' : 'shadow-raised'}
        dark:bg-surface dark:shadow-raised
        cursor-grab active:cursor-grabbing
        hover:brightness-110 transition-all duration-200
      `}
    >
      <h4 className="text-text dark:text-text font-medium">
        {task.title}
      </h4>
      <p className="text-text/70 dark:text-text/70 text-sm mt-1">
        {task.description}
      </p>
    </div>
  );
};
````

These advanced patterns demonstrate:

1. **Multi-Step Form**

   - Type-safe form steps
   - Animated transitions
   - Progress tracking
   - Data persistence between steps

2. **Data Grid**

   - Virtual scrolling for performance
   - Type-safe column definitions
   - Sortable columns
   - Row click handling
   - Responsive design

3. **Kanban Board**
   - Drag and drop functionality
   - Type-safe task management
   - Smooth animations
   - Accessible interactions

Each component is built with:

- Strong TypeScript types
- React best practices
- Neumorphic design principles
- Performance optimization
- Accessibility features
