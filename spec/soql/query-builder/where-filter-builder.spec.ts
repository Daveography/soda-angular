import { createMock } from 'ts-auto-mock';
import { ISodaResource } from "../../../src/client";
import { Column } from "../../../src/soql-query-builder/clauses";
import { SoqlQuery } from "../../../src/soql-query/soql-query";
import { SoqlWhereFilter } from "../../../src/soql-query/soql-where-filter";

describe("Where Filter Builder", () => {
  interface ITestInterface {
    id: number;
    title: string;
  }

  const mockResource: ISodaResource<ITestInterface> = createMock<ISodaResource<ITestInterface>>();

  const column = Column.of<ITestInterface>(x => x.id);
  const query = new SoqlQuery<ITestInterface>(mockResource);

  it("should throw if query is null", () => {
    const createFunc = () => new SoqlWhereFilter<ITestInterface, number>(null, column);
    expect(createFunc).toThrow();
  });

  it("should throw if column is null", () => {
    const createFunc = () => new SoqlWhereFilter<ITestInterface, unknown>(query, null);
    expect(createFunc).toThrow();
  });

  it("should generate simple where equals query", () => {
    const generatedQuery = query.where(x => x.id).equals(1).toString();

    expect(decodeURIComponent(generatedQuery.toString()))
      .toEqual("?$where=id = '1'");
  });

  it("should throw if equals is null", () => {
    const builder = new SoqlWhereFilter<ITestInterface, number>(query, column);

    const equalsFunc = () => builder.equals(null);
    expect(equalsFunc).toThrow();
  });

  it("should generate simple where is not null query", () => {
    const generatedQuery = query.where(x => x.id).isNotNull().toString();

    expect(decodeURIComponent(generatedQuery))
      .toEqual("?$where=id IS NOT NULL");
  });

  it("should generate simple where is null query", () => {
    const generatedQuery = query.where(x => x.id).isNull().toString();

    expect(decodeURIComponent(generatedQuery))
      .toEqual("?$where=id IS NULL");
  });

});
