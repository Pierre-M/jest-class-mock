
# jest-class-mock

Mock any `class` in a snap for your [Jest](https://jestjs.io/fr/) tests !
## Installation

```bash
pnpm i jest-class-mock
```

```bash
npm i jest-class-mock
```

```pnpm
yarn add jest-class-mock
```    
## Usage

```typescript
import { createMock } from 'jest-class-mock'

class MyService {
    constructor(private otherService: OtherService) {}

    doSomeStuff() {
        // Doing a lot of complex stuff
    }
}

const myServiceMock = createMock(MyService)

myServiceMock.doSomeStuff // That method is now an instance of jest.fn()
```