declare global {
    interface String {
      someFunction(): someType;
    }

    type Nullable<T> = T | null;

    interface Employee{
        id: number;
        name: string;
        salary: Nullable<number>;
    }
}
  
