/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) return;
  const move = queue.dequeue();
  queue.enqueue(move);
}
