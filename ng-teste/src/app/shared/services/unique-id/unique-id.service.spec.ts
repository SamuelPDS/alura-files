import { UniqueIdService } from "./unique-id.service"

describe(UniqueIdService.name, () => {
  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
      const id = service.generateUniqueIdWithPrefix('app');
      expect(id.startsWith('app-')).toBeTrue()
  });

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
  should not generate duplicate ID when called multiple times`, () => {
    const ids = new Set();

    for(let i = 0; i<50; i++) {
      ids.add(service.generateUniqueIdWithPrefix('app'))
    }
    expect(ids.size).toEqual(50);
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should not be zero when the ID is created`, () => {
    const id = service.generateUniqueIdWithPrefix('app')
    const cont = service.getNumberOfGeneratedUniqueIds();
    expect(cont).not.toBe(0)
  })

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should show the number of ID when they are created`, () => {
    const id = service.generateUniqueIdWithPrefix('app')
    const cont = service.getNumberOfGeneratedUniqueIds();
    expect(cont).toBe(1)
  })

  it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should return exception when ID is blank`, () => {
    const emptyValues = [null, undefined, '']
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue)).toThrow()
    });
  })
});


