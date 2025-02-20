# Advanced Neumorphic Patterns - Part 3

## 1. Complex Form Wizard with State Machine

````tsx
import { createMachine, assign } from '@xstate/fsm';
import { useMachine } from '@xstate/react';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  step1: { name: string; email: string };
  step2: { company: string; role: string };
  step3: { message: string; consent: boolean };
}

type FormEvent =
  | { type: 'NEXT'; data: Partial<FormData> }
  | { type: 'PREV' }
  | { type: 'SUBMIT' }
  | { type: 'RESET' };

interface FormContext {
  data: Partial<FormData>;
  currentStep: number;
  isValid: boolean;
}

const formMachine = createMachine<FormContext, FormEvent>({
  id: 'formWizard',
  initial: 'step1',
  context: {
    data: {},
    currentStep: 1,
    isValid: false
  },
  states: {
    step1: {
      on: {
        NEXT: {
          target: 'step2',
          cond: (context, event) => {
            const data = event.data as FormData['step1'];
            return data.name && data.email;
          },
          actions: assign({
            data: (context, event) => ({ ...context.data, ...event.data }),
            currentStep: 2
          })
        }
      }
    },
    step2: {
      on: {
        NEXT: {
          target: 'step3',
          cond: (context, event) => {
            const data = event.data as FormData['step2'];
            return data.company && data.role;
          },
          actions: assign({
            data: (context, event) => ({ ...context.data, ...event.data }),
            currentStep: 3
          })
        },
        PREV: {
          target: 'step1',
          actions: assign({ currentStep: 1 })
        }
      }
    },
    step3: {
      on: {
        SUBMIT: {
          target: 'success',
          cond: (context, event) => {
            const data = context.data as FormData['step3'];
            return data.message && data.consent;
          }
        },
        PREV: {
          target: 'step2',
          actions: assign({ currentStep: 2 })
        }
      }
    },
    success: {
      on: {
        RESET: {
          target: 'step1',
          actions: assign({
            data: {},
            currentStep: 1,
            isValid: false
          })
        }
      }
    }
  }
});

interface FormWizardProps {
  onComplete: (data: FormData) => void;
  className?: string;
}

export const FormWizard: React.FC<FormWizardProps> = ({
  onComplete,
  className = ''
}) => {
  const [state, send] = useMachine(formMachine);

  const handleSubmit = (stepData: Partial<FormData>) => {
    if (state.value === 'step3') {
      onComplete(state.context.data as FormData);
      send('SUBMIT');
    } else {
      send('NEXT', { data: stepData });
    }
  };

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3].map(step => (
          <div
            key={step}
            className={`
              relative flex items-center justify-center
              w-10 h-10 rounded-full
              ${
                step <= state.context.currentStep
                  ? 'bg-accent text-accent-content shadow-raised'
                  : 'bg-surface text-text shadow-pressed'
              }
              transition-all duration-200
            `}
          >
            {step}
            {step < 3 && (
              <div
                className={`
                  absolute left-full w-full h-0.5
                  ${
                    step < state.context.currentStep
                      ? 'bg-accent'
                      : 'bg-surface shadow-pressed'
                  }
                `}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.value}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="
            bg-surface rounded-default shadow-raised p-6
            dark:bg-surface dark:shadow-raised
          "
        >
          {state.value === 'step1' && (
            <Step1Form
              initialData={state.context.data.step1}
              onSubmit={handleSubmit}
            />
          )}
          {state.value === 'step2' && (
            <Step2Form
              initialData={state.context.data.step2}
              onSubmit={handleSubmit}
              onBack={() => send('PREV')}
            />
          )}
          {state.value === 'step3' && (
            <Step3Form
              initialData={state.context.data.step3}
              onSubmit={handleSubmit}
              onBack={() => send('PREV')}
            />
          )}
          {state.value === 'success' && (
            <SuccessStep onReset={() => send('RESET')} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

## 2. Advanced Animation Controller

```tsx
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation, AnimationControls } from 'framer-motion';

interface AnimationState {
  isHovered: boolean;
  isPressed: boolean;
  isInView: boolean;
}

interface UseNeumorphicAnimationProps {
  initialState?: Partial<AnimationState>;
  duration?: number;
  ease?: string;
}

function useNeumorphicAnimation({
  initialState = {},
  duration = 0.2,
  ease = 'easeInOut'
}: UseNeumorphicAnimationProps = {}) {
  const controls = useAnimation();
  const [state, setState] = useState<AnimationState>({
    isHovered: false,
    isPressed: false,
    isInView: false,
    ...initialState
  });

  const getVariant = useCallback(() => {
    if (state.isPressed) {
      return {
        scale: 0.98,
        boxShadow: 'var(--shadow-pressed)',
        transition: { duration, ease }
      };
    }
    if (state.isHovered) {
      return {
        scale: 1.02,
        boxShadow: 'var(--shadow-raised)',
        filter: 'brightness(1.1)',
        transition: { duration, ease }
      };
    }
    if (state.isInView) {
      return {
        scale: 1,
        boxShadow: 'var(--shadow-raised)',
        transition: { duration, ease }
      };
    }
    return {
      scale: 0.95,
      boxShadow: 'none',
      transition: { duration, ease }
    };
  }, [state, duration, ease]);

  useEffect(() => {
    controls.start(getVariant());
  }, [controls, getVariant]);

  return {
    controls,
    state,
    setState: (newState: Partial<AnimationState>) => {
      setState(prev => ({ ...prev, ...newState }));
    }
  };
}

interface AnimatedNeumorphicProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const AnimatedNeumorphic: React.FC<AnimatedNeumorphicProps> = ({
  children,
  className = '',
  onClick,
  disabled = false
}) => {
  const { controls, setState } = useNeumorphicAnimation();

  return (
    <motion.div
      animate={controls}
      onHoverStart={() => !disabled && setState({ isHovered: true })}
      onHoverEnd={() => setState({ isHovered: false })}
      onTapStart={() => !disabled && setState({ isPressed: true })}
      onTapEnd={() => setState({ isPressed: false })}
      onClick={!disabled ? onClick : undefined}
      className={`
        bg-surface rounded-default p-4
        dark:bg-surface
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

## 3. Complex Drag and Drop List with Animations

```tsx
import {
  DndContext,
  DragOverlay,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragStartEvent,
  DragEndEvent
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

interface Item {
  id: string;
  content: React.ReactNode;
}

interface DraggableListProps {
  items: Item[];
  onChange: (items: Item[]) => void;
  className?: string;
}

export const DraggableList: React.FC<DraggableListProps> = ({
  items,
  onChange,
  className = ''
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 8
      }
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100,
        tolerance: 8
      }
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.findIndex(item => item.id === active.id);
      const newIndex = items.findIndex(item => item.id === over.id);

      const newItems = [...items];
      const [removed] = newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, removed);

      onChange(newItems);
    }

    setActiveId(null);
  };

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(item => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className={`space-y-2 ${className}`}>
          {items.map(item => (
            <SortableItem
              key={item.id}
              id={item.id}
              isDragging={item.id === activeId}
            >
              {item.content}
            </SortableItem>
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeId ? (
          <div
            className="
              bg-surface rounded-default shadow-lg p-4
              dark:bg-surface rotate-2 scale-105
              transition-transform duration-200
            "
          >
            {items.find(item => item.id === activeId)?.content}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

interface SortableItemProps {
  id: string;
  children: React.ReactNode;
  isDragging: boolean;
}

const SortableItem: React.FC<SortableItemProps> = ({
  id,
  children,
  isDragging
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 1 : undefined,
    opacity: isDragging ? 0.5 : 1
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        bg-surface rounded-default shadow-raised p-4
        dark:bg-surface dark:shadow-raised
        cursor-grab active:cursor-grabbing
        hover:brightness-110 transition-all duration-200
        ${isDragging ? 'shadow-lg' : ''}
      `}
    >
      {children}
    </div>
  );
};
````

These advanced patterns demonstrate:

1. **Form Wizard with State Machine**

   - Complex form state management
   - Type-safe state transitions
   - Animated step transitions
   - Progress tracking

2. **Animation Controller**

   - Reusable animation hooks
   - Complex state management
   - Smooth transitions
   - Accessibility support

3. **Drag and Drop List**
   - Complex drag and drop interactions
   - Smooth animations
   - Touch support
   - Accessibility features

Each component features:

- Strong TypeScript types
- React best practices
- Neumorphic design principles
- Performance optimization
- Accessibility features
