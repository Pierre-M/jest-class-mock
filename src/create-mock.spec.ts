import Faker from "faker"

import { createMock, MockedSubject } from "./create-mock"

class TestSubject {
  method() {
    //
  }
}

describe("createMock", () => {
  let mock: MockedSubject<TestSubject>

  beforeEach(() => {
    mock = createMock(TestSubject)
  })

  it("should mock subject methods", () => {
    const value = Faker.random.word()

    mock.method.mockReturnValue(value)

    expect(mock.method()).toBe(value)
  })
})
