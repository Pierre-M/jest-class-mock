import Mock = jest.Mock

type Subject<T> = new (...args: unknown[]) => T

export type MockedSubject<T> = {
  [key in keyof T]: Mock
}

export const createMock = <T>(subject: Subject<T>): MockedSubject<T> => {
  return Object.keys(subject.prototype).reduce((mockedSubject, key) => {
    if (key === "constructor") return mockedSubject

    mockedSubject[key as keyof T] = jest.fn()

    return mockedSubject
  }, {} as MockedSubject<T>)
}
