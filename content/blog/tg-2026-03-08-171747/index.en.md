---
title: "💀 GIL AND ASYNCHRONY"
date: 2026-03-08T17:17:47
tags: ["telegram", "python", "asynchrony"]
tg_link: "https://t.me/moving_to_ds/64"
tg_media: []
---

### 🟡 Why is there no proper multithreading in Python?
– The GIL gets in the way.
GIL (Global Interpreter Lock) is a mechanism that grants exclusive access to the CPU to only one thread at a time. Essentially, it's a primitive — a mutex. This behavior prevents Race Conditions — states where multiple threads attempt to modify the same object in memory simultaneously. At the dawn of Python, this was the simplest and fastest solution. But time goes on, the GIL still exists, and we have to learn how to live in a "single-threaded" world.

### 🟡 CPU and IO-bound
Resource usage tasks are divided into:
- 🌟 CPU-bound – those that load the processor to the maximum (computations)
- 🌟 IO-bound – those that spend most of their time not on computations, but on input/output system calls (reading/writing to a database, sending network requests, waiting for user input)

- ➡️ It seems irrational to allocate the CPU to tasks that only use it, say, 1% of the time, while spending the rest of the time just waiting for something (a network response, user input).

🎆 And this is where the idea of asynchrony comes in:

Let's allocate CPU time to tasks that actually need it, and temporarily take it away from those waiting for something.

### Asynchrony (Concurrent Multitasking)
Instead of sending requests to a server sequentially (synchronously), we can switch between tasks while they are waiting, and return to them when the response is ready and CPU work is needed again.

**Example**: sending 2 HTTP requests
Synchronous code 🍴:
Request 1 ➡️ Server ➡️ Response 1, Request 2 ➡️ Server ➡️ Response 2

Asynchronous code 😡:
Request 1 ➡️ Server
                 ➡️ Request 2 ➡️ Server

⚡️ Considering that in IO-bound tasks most of the time is spent waiting for a response from the server, the time to receive all responses is cut almost in half. The magic of asynchronous code — a single thread, but much faster.

📐*The term "synchronous code" can be confusing. Intuitively, it seems like synchronous means parallel, but in programming terminology, it means sequential — that is, each subsequent task waits for the previous one to finish. Asynchrony*, on the other hand, allows the next task not to wait (if IO-bound).*

To write asynchronous code in Python, you need to understand the **core concepts:**

- **Async function** – a function declared with `async def`. When called, the code inside does not execute immediately; instead, a coroutine object is returned. Inside it, the `await` operator is used to pause execution at waiting points, handing control back to the Event Loop without blocking the thread.
- **Coroutine** – an object created when an async function is called. Coroutines can be scheduled for execution in asynchronous mode; the event loop will switch between them (concurrency) at the moment of `await`.
- *In reality, coroutines are generators (`yield`); before the `async/await` syntax was introduced, that was how asynchronous code was written, which was quite cumbersome.*
- **Task** – created from a coroutine object. Unlike a coroutine (which upon creation doesn't start running without `await`), tasks immediately start background execution.
- **Event loop** – the dispatcher that decides which coroutine gets to "work" right now. It understands when and where to switch context at the moment of `await`.

There are also less common **but no less useful:**

- **asyncio.Lock** – the asynchronous equivalent of a mutex. Guarantees that only one coroutine executes the critical section.
- **asyncio.Semaphore** – like a Lock, but allows defining any number of coroutines simultaneously working with the critical section.
- **asyncio.Event** – events for synchronizing coroutines with each other. For example: one notifies, others wait for the signal.
- **asyncio.Queue** – an asynchronous queue for producer-consumer architectures.

**Python Example**: timers running concurrently:

```python
import asyncio

class Timer:
    def __init__(self, name: str, time: int):
        self.name = name
        self.lost_time = time

    async def start(self) -> None:
        while self.lost_time:
            print(f'[{self.name}] {self.lost_time} seconds remaining!')
            self.lost_time -= 1
            # update timer and wait a second, switching execution in the meantime (await)
            await asyncio.sleep(1)

# a main function is always needed to run in the event loop
async def main() -> None:
    timer1 = Timer(name='Timer 1', time=5)
    timer2 = Timer(name='Timer 2', time=10)

    await asyncio.gather(timer1.start(), timer2.start())

# event loop
asyncio.run(main())
```

ℹ️ Here `asyncio.gather` is used to run coroutines concurrently, because upon creation they don't start automatically, only after `await`.

Alternatively, you can create tasks from coroutines:

```python
async def main() -> None:
    timer1 = Timer(name='Timer 1', time=5)
    timer2 = Timer(name='Timer 2', time=10)

    # they start immediately upon creation
    task1 = asyncio.create_task(timer1.start())
    task2 = asyncio.create_task(timer2.start())

    # need await for each (otherwise the program will exit immediately after creating them, without waiting for completion)
    await task1
    await task2
```

🚫 But you **should not** do this:

```python
async def main() -> None:
    timer1 = Timer(name='Timer 1', time=5)
    timer2 = Timer(name='Timer 2', time=10)

    # coroutines will run sequentially (the 1st timer will run completely, then the 2nd)
    await timer1.start()
    await timer2.start()
```

Why is Python not strictly single-threaded after all?

- 1️⃣ The GIL is released during execution of C code (libraries like NumPy, Torch, and others)
- 2️⃣ The GIL is released during input/output system calls

So it turns out you can parallelize C computations across threads (for instance, model training).
↪️ Nice

And it also turns out that for IO-bound tasks there is no restriction on multithreading, and nothing prevents running the timers from the [previous example](https://t.me/moving_to_ds/67) in parallel.
↪️ Nice, but asynchrony doesn't require resources to maintain OS threads, which is why it's considered preferable.

Asynchrony + Multithreading

In some cases, it makes sense to use both:

- If the main code is asynchronous but there's a synchronous library, you can call its methods in a separate thread (if IO-bound, of course) without blocking the event loop.
- You can run vector calculations (NumPy, Torch) in a separate thread without blocking the main asynchronous code.

The key is to understand exactly how the GIL and asynchrony work in Python 😎
Do you get it now?