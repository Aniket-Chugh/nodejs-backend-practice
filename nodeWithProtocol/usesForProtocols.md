TCP  real use case:

1. Chat Applications (WhatsApp, Discord’s low-level layer)

Chat apps ko chahiye:
~ instant delivery
~ no loss
~ bi-directional
~ persistent connection

HTTP har msg ke liye new connection banata hai → slow.

TCP me ek connection = unlimited msgs → fast.
and in games and in iot devices

--- i am making chat apps so use websocteks or tcp connection?






The "Sticky" Packet Problem:
In TCP, if you send "Hello" and then "World" very quickly, the server might receive "HelloWorld" as one chunk. This is because TCP is a stream, not a message queue.


In TCP, “Hello” and “World” can merge into “HelloWorld” because TCP is a continuous byte stream.

But UDP is datagram-based, meaning:

~ Each UDP send = one message

If you send:

send("Hello")
send("World")


The receiver always gets:

[Datagram 1] → "Hello"
[Datagram 2] → "World"
