# Advanced Neumorphic Patterns - Part 2

## 1. Infinite Scroll with Intersection Observer

````tsx
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface InfiniteListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  loadMore: () => Promise<void>;
  hasMore: boolean;
  isLoading: boolean;
  className?: string;
}

export function InfiniteList<T extends { id: string | number }>({
  items,
  renderItem,
  loadMore,
  hasMore,
  isLoading,
  className = ''
}: InfiniteListProps<T>) {
  const loadingRef = useRef<number>(0);
  const { ref: bottomRef, inView } = useInView({
    threshold: 0.5,
    rootMargin: '100px'
  });

  useEffect(() => {
    const currentLoadingRef = ++loadingRef.current;

    if (inView && hasMore && !isLoading) {
      loadMore().then(() => {
        // Only update if this is still the most recent load request
        if (currentLoadingRef === loadingRef.current) {
          // Handle successful load
        }
      });
    }
  }, [inView, hasMore, isLoading, loadMore]);

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map(item => (
        <div
          key={item.id}
          className="
            bg-surface rounded-default shadow-raised p-4
            dark:bg-surface dark:shadow-raised
            hover:brightness-110 transition-all duration-200
          "
        >
          {renderItem(item)}
        </div>
      ))}

      <div ref={bottomRef} className="h-8">
        {isLoading && (
          <div className="flex justify-center">
            <div className="
              w-8 h-8 rounded-full border-2 border-accent
              border-t-transparent animate-spin
            " />
          </div>
        )}
      </div>
    </div>
  );
}

## 2. Complex Filter System with URL State

```tsx
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import qs from 'query-string';

interface FilterOption {
  id: string;
  label: string;
  type: 'select' | 'multiselect' | 'range' | 'search';
  options?: Array<{ value: string; label: string }>;
  min?: number;
  max?: number;
}

interface FilterState {
  [key: string]: string | string[] | [number, number] | null;
}

interface FilterSystemProps {
  options: FilterOption[];
  onFilterChange: (filters: FilterState) => void;
  className?: string;
}

export const FilterSystem: React.FC<FilterSystemProps> = ({
  options,
  onFilterChange,
  className = ''
}) => {
  const router = useRouter();
  const [filters, setFilters] = useState<FilterState>({});

  // Sync URL with filter state
  useEffect(() => {
    const query = router.query;
    const initialFilters: FilterState = {};

    options.forEach(option => {
      const value = query[option.id];
      if (value) {
        if (option.type === 'range' && Array.isArray(value)) {
          initialFilters[option.id] = value.map(Number) as [number, number];
        } else if (option.type === 'multiselect') {
          initialFilters[option.id] = Array.isArray(value) ? value : [value];
        } else {
          initialFilters[option.id] = value;
        }
      }
    });

    setFilters(initialFilters);
  }, [router.query, options]);

  // Update URL when filters change
  const updateUrl = useCallback((newFilters: FilterState) => {
    const query = qs.stringify(newFilters, {
      arrayFormat: 'comma',
      skipNull: true
    });

    router.push(`${router.pathname}?${query}`, undefined, { shallow: true });
  }, [router]);

  const handleFilterChange = (id: string, value: string | string[] | [number, number] | null) => {
    const newFilters = { ...filters, [id]: value };
    if (value === null) {
      delete newFilters[id];
    }
    setFilters(newFilters);
    updateUrl(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {options.map(option => (
        <div
          key={option.id}
          className="
            bg-surface rounded-default shadow-raised p-4
            dark:bg-surface dark:shadow-raised
          "
        >
          <label className="block text-sm font-medium text-text dark:text-text mb-2">
            {option.label}
          </label>

          {option.type === 'select' && (
            <select
              value={filters[option.id] as string || ''}
              onChange={e => handleFilterChange(option.id, e.target.value)}
              className="
                w-full bg-surface shadow-pressed rounded-default p-2
                dark:bg-surface dark:shadow-pressed
                focus:outline-none focus:ring-2 focus:ring-accent
              "
            >
              <option value="">All</option>
              {option.options?.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          )}

          {option.type === 'multiselect' && (
            <div className="space-y-2">
              {option.options?.map(opt => (
                <label
                  key={opt.value}
                  className="flex items-center space-x-2"
                >
                  <input
                    type="checkbox"
                    checked={
                      (filters[option.id] as string[] || []).includes(opt.value)
                    }
                    onChange={e => {
                      const current = (filters[option.id] as string[]) || [];
                      const newValue = e.target.checked
                        ? [...current, opt.value]
                        : current.filter(v => v !== opt.value);
                      handleFilterChange(option.id, newValue);
                    }}
                    className="
                      rounded-default shadow-pressed
                      checked:bg-accent checked:shadow-pressed
                      focus:ring-2 focus:ring-accent
                    "
                  />
                  <span className="text-text dark:text-text">
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          )}

          {option.type === 'range' && option.min !== undefined && option.max !== undefined && (
            <div className="space-y-2">
              <div className="flex space-x-4">
                <input
                  type="number"
                  min={option.min}
                  max={option.max}
                  value={(filters[option.id] as [number, number])?.[0] || option.min}
                  onChange={e => {
                    const current = (filters[option.id] as [number, number]) || [option.min, option.max];
                    handleFilterChange(option.id, [Number(e.target.value), current[1]]);
                  }}
                  className="
                    w-24 bg-surface shadow-pressed rounded-default p-2
                    dark:bg-surface dark:shadow-pressed
                    focus:outline-none focus:ring-2 focus:ring-accent
                  "
                />
                <span className="text-text dark:text-text">to</span>
                <input
                  type="number"
                  min={option.min}
                  max={option.max}
                  value={(filters[option.id] as [number, number])?.[1] || option.max}
                  onChange={e => {
                    const current = (filters[option.id] as [number, number]) || [option.min, option.max];
                    handleFilterChange(option.id, [current[0], Number(e.target.value)]);
                  }}
                  className="
                    w-24 bg-surface shadow-pressed rounded-default p-2
                    dark:bg-surface dark:shadow-pressed
                    focus:outline-none focus:ring-2 focus:ring-accent
                  "
                />
              </div>
            </div>
          )}

          {option.type === 'search' && (
            <input
              type="text"
              value={filters[option.id] as string || ''}
              onChange={e => handleFilterChange(option.id, e.target.value)}
              placeholder={`Search ${option.label.toLowerCase()}...`}
              className="
                w-full bg-surface shadow-pressed rounded-default p-2
                dark:bg-surface dark:shadow-pressed
                focus:outline-none focus:ring-2 focus:ring-accent
              "
            />
          )}
        </div>
      ))}
    </div>
  );
};

## 3. Advanced Toast System with Queue

```tsx
import { createContext, useContext, useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface ToastContextValue {
  showToast: (toast: Omit<Toast, 'id'>) => void;
  hideToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 3
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(({ message, type, duration = 5000 }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);

    setToasts(current => {
      const newToasts = [{ id, message, type, duration }, ...current];
      return newToasts.slice(0, maxToasts);
    });

    if (duration > 0) {
      setTimeout(() => {
        hideToast(id);
      }, duration);
    }
  }, [maxToasts]);

  const hideToast = useCallback((id: string) => {
    setToasts(current => current.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`
                min-w-[300px] p-4 rounded-default shadow-raised
                ${toast.type === 'success' && 'bg-success text-success-content'}
                ${toast.type === 'error' && 'bg-error text-error-content'}
                ${toast.type === 'info' && 'bg-info text-info-content'}
                ${toast.type === 'warning' && 'bg-warning text-warning-content'}
              `}
            >
              <div className="flex items-center justify-between">
                <p>{toast.message}</p>
                <button
                  onClick={() => hideToast(toast.id)}
                  className="ml-4 text-current opacity-70 hover:opacity-100"
                >
                  ×
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
````

These advanced patterns demonstrate:

1. **Infinite Scroll**

   - Type-safe props
   - Intersection Observer integration
   - Loading states
   - Performance optimization

2. **Filter System**

   - URL state synchronization
   - Multiple filter types
   - Type-safe filter handling
   - Responsive design

3. **Toast System**
   - Queue management
   - Animation integration
   - Type-safe context
   - Customizable styling

Each component features:

- Strong TypeScript types
- React best practices
- Neumorphic design principles
- Performance optimization
- Accessibility features
