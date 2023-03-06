# module federation showcase

This repository contains several showcases about the micro frontend architechtures with module federation.

## Application architecture

![frontend-architecture](./architecture.png)

- A **shell** (Angular) application,contains a module of a **catalog** (Angular) application.
- The `/catalog` route within the **shell** application points to the root (`/`) route of the **catalog** module.
 
## Running

- in `./state-lib` directory:
  ```bash
  npm install
  ng build; pushd dist/state-lib; npm link; popd
  ```

- in `./catalog` directory:
  ```bash
  npm install
  npm link state-lib
  ng serve
  ```

- in `./shell` directory:
  ```bash
  npm install
  npm link state-lib
  ng serve
  ```

- Access catalog: [http://localhost:4201](http://localhost:4201/)
- Access shell: [http://localhost:4200/](http://localhost:4200/)
