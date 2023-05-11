### Event Handling using *CQRS pattern* ###
- Command Query Responsibility Segregation
- Pros:
    - Separation of commands and queries
    - NestJS CQRS module provides a lot of benefits like automatic registration and discovery of command
    - It enables a high degree of decoupling between the different components of the system as they communicate through commands and queries only, without needing to share any state or knowledge of the internal workings of each other.
    - It allows you to scale the read and write sides independently
    - Since commands and queries are processed separately, we can optimize the read and write operations of the application differently. For example, we can use a different database for reads than for writes, or we can use different data models or indexes for reads and writes. This can lead to significant performance improvements, especially for applications with a high read/write ratio.