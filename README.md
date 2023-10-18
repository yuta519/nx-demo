## How to run applications
- Base command
  - By executig this command, you can run one specfied service.
    ```bash
    npx nx <target> <project>
    ```
  - Example: Run the web app
    ```bash
    npx nx dev web
    ```
- Run all services
  - By runnnig this command, you can run multiple services like frontend and backend
    ```bash
    npx nx run-many -t dev
    ```

## References
- This repository setup is based on [this blo]g(https://blog.nrwl.io/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-bc5d97258a7e#d69f)
