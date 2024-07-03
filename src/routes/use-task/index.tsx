import { component$, useSignal, useTask$ } from '@builder.io/qwik';

export default component$(() => {
  const inputSignal = useSignal('');
  const inputSignalDebounced = useSignal('');

  useTask$(({ track }) => {
    console.log('⚠️ useTask$ is executed.');

    const inputValue = track(() => inputSignal.value);

    const timeout = setTimeout(
      () => (inputSignalDebounced.value = inputValue),
      1000
    );

    return () => clearTimeout(timeout);
  });

  return (
    <>
      <input type="text" bind:value={inputSignal} />
      <small>{inputSignalDebounced.value}</small>
    </>
  );
});
