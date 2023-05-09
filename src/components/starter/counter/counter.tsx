import { $, component$, useSignal } from '@builder.io/qwik';

export const Counter = component$(() => {
  const count = useSignal(70);

  const setCount = $((newValue: number) => {
    if (newValue < 0 || newValue > 100) {
      return;
    }
    count.value = newValue;
  });

  return (
    <div>
      <button
        data-test="btn-decrease"
        class="button-dark button-small"
        onClick$={() => setCount(count.value - 1)}
      >
        -
      </button>

      <span data-test="count">{count.value}</span>

      <button
        data-test="btn-increase"
        class="button-dark button-small"
        onClick$={() => setCount(count.value + 1)}
      >
        +
      </button>
    </div>
  );
});
