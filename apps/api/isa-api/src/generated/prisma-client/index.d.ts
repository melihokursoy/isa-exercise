
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model IsaOptions
 * 
 */
export type IsaOptions = $Result.DefaultSelection<Prisma.$IsaOptionsPayload>
/**
 * Model Isa
 * 
 */
export type Isa = $Result.DefaultSelection<Prisma.$IsaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more IsaOptions
 * const isaOptions = await prisma.isaOptions.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more IsaOptions
   * const isaOptions = await prisma.isaOptions.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.isaOptions`: Exposes CRUD operations for the **IsaOptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IsaOptions
    * const isaOptions = await prisma.isaOptions.findMany()
    * ```
    */
  get isaOptions(): Prisma.IsaOptionsDelegate<ExtArgs>;

  /**
   * `prisma.isa`: Exposes CRUD operations for the **Isa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Isas
    * const isas = await prisma.isa.findMany()
    * ```
    */
  get isa(): Prisma.IsaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    IsaOptions: 'IsaOptions',
    Isa: 'Isa'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'isaOptions' | 'isa'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      IsaOptions: {
        payload: Prisma.$IsaOptionsPayload<ExtArgs>
        fields: Prisma.IsaOptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IsaOptionsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IsaOptionsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          findFirst: {
            args: Prisma.IsaOptionsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IsaOptionsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          findMany: {
            args: Prisma.IsaOptionsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>[]
          }
          create: {
            args: Prisma.IsaOptionsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          createMany: {
            args: Prisma.IsaOptionsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IsaOptionsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          update: {
            args: Prisma.IsaOptionsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          deleteMany: {
            args: Prisma.IsaOptionsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IsaOptionsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IsaOptionsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaOptionsPayload>
          }
          aggregate: {
            args: Prisma.IsaOptionsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIsaOptions>
          }
          groupBy: {
            args: Prisma.IsaOptionsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IsaOptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IsaOptionsCountArgs<ExtArgs>,
            result: $Utils.Optional<IsaOptionsCountAggregateOutputType> | number
          }
        }
      }
      Isa: {
        payload: Prisma.$IsaPayload<ExtArgs>
        fields: Prisma.IsaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IsaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IsaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          findFirst: {
            args: Prisma.IsaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IsaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          findMany: {
            args: Prisma.IsaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>[]
          }
          create: {
            args: Prisma.IsaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          createMany: {
            args: Prisma.IsaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IsaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          update: {
            args: Prisma.IsaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          deleteMany: {
            args: Prisma.IsaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IsaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IsaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IsaPayload>
          }
          aggregate: {
            args: Prisma.IsaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIsa>
          }
          groupBy: {
            args: Prisma.IsaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IsaGroupByOutputType>[]
          }
          count: {
            args: Prisma.IsaCountArgs<ExtArgs>,
            result: $Utils.Optional<IsaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model IsaOptions
   */

  export type AggregateIsaOptions = {
    _count: IsaOptionsCountAggregateOutputType | null
    _min: IsaOptionsMinAggregateOutputType | null
    _max: IsaOptionsMaxAggregateOutputType | null
  }

  export type IsaOptionsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IsaOptionsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type IsaOptionsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type IsaOptionsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type IsaOptionsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type IsaOptionsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type IsaOptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IsaOptions to aggregate.
     */
    where?: IsaOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IsaOptions to fetch.
     */
    orderBy?: IsaOptionsOrderByWithRelationInput | IsaOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IsaOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IsaOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IsaOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IsaOptions
    **/
    _count?: true | IsaOptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IsaOptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IsaOptionsMaxAggregateInputType
  }

  export type GetIsaOptionsAggregateType<T extends IsaOptionsAggregateArgs> = {
        [P in keyof T & keyof AggregateIsaOptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIsaOptions[P]>
      : GetScalarType<T[P], AggregateIsaOptions[P]>
  }




  export type IsaOptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IsaOptionsWhereInput
    orderBy?: IsaOptionsOrderByWithAggregationInput | IsaOptionsOrderByWithAggregationInput[]
    by: IsaOptionsScalarFieldEnum[] | IsaOptionsScalarFieldEnum
    having?: IsaOptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IsaOptionsCountAggregateInputType | true
    _min?: IsaOptionsMinAggregateInputType
    _max?: IsaOptionsMaxAggregateInputType
  }

  export type IsaOptionsGroupByOutputType = {
    id: string
    name: string
    _count: IsaOptionsCountAggregateOutputType | null
    _min: IsaOptionsMinAggregateOutputType | null
    _max: IsaOptionsMaxAggregateOutputType | null
  }

  type GetIsaOptionsGroupByPayload<T extends IsaOptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IsaOptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IsaOptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IsaOptionsGroupByOutputType[P]>
            : GetScalarType<T[P], IsaOptionsGroupByOutputType[P]>
        }
      >
    >


  export type IsaOptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["isaOptions"]>

  export type IsaOptionsSelectScalar = {
    id?: boolean
    name?: boolean
  }



  export type $IsaOptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IsaOptions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["isaOptions"]>
    composites: {}
  }


  type IsaOptionsGetPayload<S extends boolean | null | undefined | IsaOptionsDefaultArgs> = $Result.GetResult<Prisma.$IsaOptionsPayload, S>

  type IsaOptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IsaOptionsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IsaOptionsCountAggregateInputType | true
    }

  export interface IsaOptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IsaOptions'], meta: { name: 'IsaOptions' } }
    /**
     * Find zero or one IsaOptions that matches the filter.
     * @param {IsaOptionsFindUniqueArgs} args - Arguments to find a IsaOptions
     * @example
     * // Get one IsaOptions
     * const isaOptions = await prisma.isaOptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IsaOptionsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsFindUniqueArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IsaOptions that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IsaOptionsFindUniqueOrThrowArgs} args - Arguments to find a IsaOptions
     * @example
     * // Get one IsaOptions
     * const isaOptions = await prisma.isaOptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IsaOptionsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IsaOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsFindFirstArgs} args - Arguments to find a IsaOptions
     * @example
     * // Get one IsaOptions
     * const isaOptions = await prisma.isaOptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IsaOptionsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsFindFirstArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IsaOptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsFindFirstOrThrowArgs} args - Arguments to find a IsaOptions
     * @example
     * // Get one IsaOptions
     * const isaOptions = await prisma.isaOptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IsaOptionsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IsaOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IsaOptions
     * const isaOptions = await prisma.isaOptions.findMany()
     * 
     * // Get first 10 IsaOptions
     * const isaOptions = await prisma.isaOptions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const isaOptionsWithIdOnly = await prisma.isaOptions.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IsaOptionsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IsaOptions.
     * @param {IsaOptionsCreateArgs} args - Arguments to create a IsaOptions.
     * @example
     * // Create one IsaOptions
     * const IsaOptions = await prisma.isaOptions.create({
     *   data: {
     *     // ... data to create a IsaOptions
     *   }
     * })
     * 
    **/
    create<T extends IsaOptionsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsCreateArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IsaOptions.
     *     @param {IsaOptionsCreateManyArgs} args - Arguments to create many IsaOptions.
     *     @example
     *     // Create many IsaOptions
     *     const isaOptions = await prisma.isaOptions.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IsaOptionsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IsaOptions.
     * @param {IsaOptionsDeleteArgs} args - Arguments to delete one IsaOptions.
     * @example
     * // Delete one IsaOptions
     * const IsaOptions = await prisma.isaOptions.delete({
     *   where: {
     *     // ... filter to delete one IsaOptions
     *   }
     * })
     * 
    **/
    delete<T extends IsaOptionsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsDeleteArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IsaOptions.
     * @param {IsaOptionsUpdateArgs} args - Arguments to update one IsaOptions.
     * @example
     * // Update one IsaOptions
     * const isaOptions = await prisma.isaOptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IsaOptionsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsUpdateArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IsaOptions.
     * @param {IsaOptionsDeleteManyArgs} args - Arguments to filter IsaOptions to delete.
     * @example
     * // Delete a few IsaOptions
     * const { count } = await prisma.isaOptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IsaOptionsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaOptionsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IsaOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IsaOptions
     * const isaOptions = await prisma.isaOptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IsaOptionsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IsaOptions.
     * @param {IsaOptionsUpsertArgs} args - Arguments to update or create a IsaOptions.
     * @example
     * // Update or create a IsaOptions
     * const isaOptions = await prisma.isaOptions.upsert({
     *   create: {
     *     // ... data to create a IsaOptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IsaOptions we want to update
     *   }
     * })
    **/
    upsert<T extends IsaOptionsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IsaOptionsUpsertArgs<ExtArgs>>
    ): Prisma__IsaOptionsClient<$Result.GetResult<Prisma.$IsaOptionsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IsaOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsCountArgs} args - Arguments to filter IsaOptions to count.
     * @example
     * // Count the number of IsaOptions
     * const count = await prisma.isaOptions.count({
     *   where: {
     *     // ... the filter for the IsaOptions we want to count
     *   }
     * })
    **/
    count<T extends IsaOptionsCountArgs>(
      args?: Subset<T, IsaOptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IsaOptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IsaOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IsaOptionsAggregateArgs>(args: Subset<T, IsaOptionsAggregateArgs>): Prisma.PrismaPromise<GetIsaOptionsAggregateType<T>>

    /**
     * Group by IsaOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaOptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IsaOptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IsaOptionsGroupByArgs['orderBy'] }
        : { orderBy?: IsaOptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IsaOptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIsaOptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IsaOptions model
   */
  readonly fields: IsaOptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IsaOptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IsaOptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IsaOptions model
   */ 
  interface IsaOptionsFieldRefs {
    readonly id: FieldRef<"IsaOptions", 'String'>
    readonly name: FieldRef<"IsaOptions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * IsaOptions findUnique
   */
  export type IsaOptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter, which IsaOptions to fetch.
     */
    where: IsaOptionsWhereUniqueInput
  }

  /**
   * IsaOptions findUniqueOrThrow
   */
  export type IsaOptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter, which IsaOptions to fetch.
     */
    where: IsaOptionsWhereUniqueInput
  }

  /**
   * IsaOptions findFirst
   */
  export type IsaOptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter, which IsaOptions to fetch.
     */
    where?: IsaOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IsaOptions to fetch.
     */
    orderBy?: IsaOptionsOrderByWithRelationInput | IsaOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IsaOptions.
     */
    cursor?: IsaOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IsaOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IsaOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IsaOptions.
     */
    distinct?: IsaOptionsScalarFieldEnum | IsaOptionsScalarFieldEnum[]
  }

  /**
   * IsaOptions findFirstOrThrow
   */
  export type IsaOptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter, which IsaOptions to fetch.
     */
    where?: IsaOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IsaOptions to fetch.
     */
    orderBy?: IsaOptionsOrderByWithRelationInput | IsaOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IsaOptions.
     */
    cursor?: IsaOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IsaOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IsaOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IsaOptions.
     */
    distinct?: IsaOptionsScalarFieldEnum | IsaOptionsScalarFieldEnum[]
  }

  /**
   * IsaOptions findMany
   */
  export type IsaOptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter, which IsaOptions to fetch.
     */
    where?: IsaOptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IsaOptions to fetch.
     */
    orderBy?: IsaOptionsOrderByWithRelationInput | IsaOptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IsaOptions.
     */
    cursor?: IsaOptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IsaOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IsaOptions.
     */
    skip?: number
    distinct?: IsaOptionsScalarFieldEnum | IsaOptionsScalarFieldEnum[]
  }

  /**
   * IsaOptions create
   */
  export type IsaOptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * The data needed to create a IsaOptions.
     */
    data: XOR<IsaOptionsCreateInput, IsaOptionsUncheckedCreateInput>
  }

  /**
   * IsaOptions createMany
   */
  export type IsaOptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IsaOptions.
     */
    data: IsaOptionsCreateManyInput | IsaOptionsCreateManyInput[]
  }

  /**
   * IsaOptions update
   */
  export type IsaOptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * The data needed to update a IsaOptions.
     */
    data: XOR<IsaOptionsUpdateInput, IsaOptionsUncheckedUpdateInput>
    /**
     * Choose, which IsaOptions to update.
     */
    where: IsaOptionsWhereUniqueInput
  }

  /**
   * IsaOptions updateMany
   */
  export type IsaOptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IsaOptions.
     */
    data: XOR<IsaOptionsUpdateManyMutationInput, IsaOptionsUncheckedUpdateManyInput>
    /**
     * Filter which IsaOptions to update
     */
    where?: IsaOptionsWhereInput
  }

  /**
   * IsaOptions upsert
   */
  export type IsaOptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * The filter to search for the IsaOptions to update in case it exists.
     */
    where: IsaOptionsWhereUniqueInput
    /**
     * In case the IsaOptions found by the `where` argument doesn't exist, create a new IsaOptions with this data.
     */
    create: XOR<IsaOptionsCreateInput, IsaOptionsUncheckedCreateInput>
    /**
     * In case the IsaOptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IsaOptionsUpdateInput, IsaOptionsUncheckedUpdateInput>
  }

  /**
   * IsaOptions delete
   */
  export type IsaOptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
    /**
     * Filter which IsaOptions to delete.
     */
    where: IsaOptionsWhereUniqueInput
  }

  /**
   * IsaOptions deleteMany
   */
  export type IsaOptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IsaOptions to delete
     */
    where?: IsaOptionsWhereInput
  }

  /**
   * IsaOptions without action
   */
  export type IsaOptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IsaOptions
     */
    select?: IsaOptionsSelect<ExtArgs> | null
  }


  /**
   * Model Isa
   */

  export type AggregateIsa = {
    _count: IsaCountAggregateOutputType | null
    _avg: IsaAvgAggregateOutputType | null
    _sum: IsaSumAggregateOutputType | null
    _min: IsaMinAggregateOutputType | null
    _max: IsaMaxAggregateOutputType | null
  }

  export type IsaAvgAggregateOutputType = {
    savings: number | null
  }

  export type IsaSumAggregateOutputType = {
    savings: number | null
  }

  export type IsaMinAggregateOutputType = {
    userId: string | null
    isaOptionId: string | null
    savings: number | null
  }

  export type IsaMaxAggregateOutputType = {
    userId: string | null
    isaOptionId: string | null
    savings: number | null
  }

  export type IsaCountAggregateOutputType = {
    userId: number
    isaOptionId: number
    savings: number
    _all: number
  }


  export type IsaAvgAggregateInputType = {
    savings?: true
  }

  export type IsaSumAggregateInputType = {
    savings?: true
  }

  export type IsaMinAggregateInputType = {
    userId?: true
    isaOptionId?: true
    savings?: true
  }

  export type IsaMaxAggregateInputType = {
    userId?: true
    isaOptionId?: true
    savings?: true
  }

  export type IsaCountAggregateInputType = {
    userId?: true
    isaOptionId?: true
    savings?: true
    _all?: true
  }

  export type IsaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Isa to aggregate.
     */
    where?: IsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Isas to fetch.
     */
    orderBy?: IsaOrderByWithRelationInput | IsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Isas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Isas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Isas
    **/
    _count?: true | IsaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IsaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IsaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IsaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IsaMaxAggregateInputType
  }

  export type GetIsaAggregateType<T extends IsaAggregateArgs> = {
        [P in keyof T & keyof AggregateIsa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIsa[P]>
      : GetScalarType<T[P], AggregateIsa[P]>
  }




  export type IsaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IsaWhereInput
    orderBy?: IsaOrderByWithAggregationInput | IsaOrderByWithAggregationInput[]
    by: IsaScalarFieldEnum[] | IsaScalarFieldEnum
    having?: IsaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IsaCountAggregateInputType | true
    _avg?: IsaAvgAggregateInputType
    _sum?: IsaSumAggregateInputType
    _min?: IsaMinAggregateInputType
    _max?: IsaMaxAggregateInputType
  }

  export type IsaGroupByOutputType = {
    userId: string
    isaOptionId: string
    savings: number
    _count: IsaCountAggregateOutputType | null
    _avg: IsaAvgAggregateOutputType | null
    _sum: IsaSumAggregateOutputType | null
    _min: IsaMinAggregateOutputType | null
    _max: IsaMaxAggregateOutputType | null
  }

  type GetIsaGroupByPayload<T extends IsaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IsaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IsaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IsaGroupByOutputType[P]>
            : GetScalarType<T[P], IsaGroupByOutputType[P]>
        }
      >
    >


  export type IsaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    isaOptionId?: boolean
    savings?: boolean
  }, ExtArgs["result"]["isa"]>

  export type IsaSelectScalar = {
    userId?: boolean
    isaOptionId?: boolean
    savings?: boolean
  }



  export type $IsaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Isa"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      isaOptionId: string
      savings: number
    }, ExtArgs["result"]["isa"]>
    composites: {}
  }


  type IsaGetPayload<S extends boolean | null | undefined | IsaDefaultArgs> = $Result.GetResult<Prisma.$IsaPayload, S>

  type IsaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IsaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IsaCountAggregateInputType | true
    }

  export interface IsaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Isa'], meta: { name: 'Isa' } }
    /**
     * Find zero or one Isa that matches the filter.
     * @param {IsaFindUniqueArgs} args - Arguments to find a Isa
     * @example
     * // Get one Isa
     * const isa = await prisma.isa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IsaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IsaFindUniqueArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Isa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IsaFindUniqueOrThrowArgs} args - Arguments to find a Isa
     * @example
     * // Get one Isa
     * const isa = await prisma.isa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IsaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Isa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaFindFirstArgs} args - Arguments to find a Isa
     * @example
     * // Get one Isa
     * const isa = await prisma.isa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IsaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaFindFirstArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Isa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaFindFirstOrThrowArgs} args - Arguments to find a Isa
     * @example
     * // Get one Isa
     * const isa = await prisma.isa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IsaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Isas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Isas
     * const isas = await prisma.isa.findMany()
     * 
     * // Get first 10 Isas
     * const isas = await prisma.isa.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const isaWithUserIdOnly = await prisma.isa.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends IsaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Isa.
     * @param {IsaCreateArgs} args - Arguments to create a Isa.
     * @example
     * // Create one Isa
     * const Isa = await prisma.isa.create({
     *   data: {
     *     // ... data to create a Isa
     *   }
     * })
     * 
    **/
    create<T extends IsaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IsaCreateArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Isas.
     *     @param {IsaCreateManyArgs} args - Arguments to create many Isas.
     *     @example
     *     // Create many Isas
     *     const isa = await prisma.isa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IsaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Isa.
     * @param {IsaDeleteArgs} args - Arguments to delete one Isa.
     * @example
     * // Delete one Isa
     * const Isa = await prisma.isa.delete({
     *   where: {
     *     // ... filter to delete one Isa
     *   }
     * })
     * 
    **/
    delete<T extends IsaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IsaDeleteArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Isa.
     * @param {IsaUpdateArgs} args - Arguments to update one Isa.
     * @example
     * // Update one Isa
     * const isa = await prisma.isa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IsaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IsaUpdateArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Isas.
     * @param {IsaDeleteManyArgs} args - Arguments to filter Isas to delete.
     * @example
     * // Delete a few Isas
     * const { count } = await prisma.isa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IsaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IsaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Isas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Isas
     * const isa = await prisma.isa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IsaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IsaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Isa.
     * @param {IsaUpsertArgs} args - Arguments to update or create a Isa.
     * @example
     * // Update or create a Isa
     * const isa = await prisma.isa.upsert({
     *   create: {
     *     // ... data to create a Isa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Isa we want to update
     *   }
     * })
    **/
    upsert<T extends IsaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IsaUpsertArgs<ExtArgs>>
    ): Prisma__IsaClient<$Result.GetResult<Prisma.$IsaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Isas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaCountArgs} args - Arguments to filter Isas to count.
     * @example
     * // Count the number of Isas
     * const count = await prisma.isa.count({
     *   where: {
     *     // ... the filter for the Isas we want to count
     *   }
     * })
    **/
    count<T extends IsaCountArgs>(
      args?: Subset<T, IsaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IsaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Isa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IsaAggregateArgs>(args: Subset<T, IsaAggregateArgs>): Prisma.PrismaPromise<GetIsaAggregateType<T>>

    /**
     * Group by Isa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IsaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IsaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IsaGroupByArgs['orderBy'] }
        : { orderBy?: IsaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IsaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIsaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Isa model
   */
  readonly fields: IsaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Isa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IsaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Isa model
   */ 
  interface IsaFieldRefs {
    readonly userId: FieldRef<"Isa", 'String'>
    readonly isaOptionId: FieldRef<"Isa", 'String'>
    readonly savings: FieldRef<"Isa", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Isa findUnique
   */
  export type IsaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter, which Isa to fetch.
     */
    where: IsaWhereUniqueInput
  }

  /**
   * Isa findUniqueOrThrow
   */
  export type IsaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter, which Isa to fetch.
     */
    where: IsaWhereUniqueInput
  }

  /**
   * Isa findFirst
   */
  export type IsaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter, which Isa to fetch.
     */
    where?: IsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Isas to fetch.
     */
    orderBy?: IsaOrderByWithRelationInput | IsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Isas.
     */
    cursor?: IsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Isas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Isas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Isas.
     */
    distinct?: IsaScalarFieldEnum | IsaScalarFieldEnum[]
  }

  /**
   * Isa findFirstOrThrow
   */
  export type IsaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter, which Isa to fetch.
     */
    where?: IsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Isas to fetch.
     */
    orderBy?: IsaOrderByWithRelationInput | IsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Isas.
     */
    cursor?: IsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Isas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Isas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Isas.
     */
    distinct?: IsaScalarFieldEnum | IsaScalarFieldEnum[]
  }

  /**
   * Isa findMany
   */
  export type IsaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter, which Isas to fetch.
     */
    where?: IsaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Isas to fetch.
     */
    orderBy?: IsaOrderByWithRelationInput | IsaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Isas.
     */
    cursor?: IsaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Isas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Isas.
     */
    skip?: number
    distinct?: IsaScalarFieldEnum | IsaScalarFieldEnum[]
  }

  /**
   * Isa create
   */
  export type IsaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * The data needed to create a Isa.
     */
    data: XOR<IsaCreateInput, IsaUncheckedCreateInput>
  }

  /**
   * Isa createMany
   */
  export type IsaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Isas.
     */
    data: IsaCreateManyInput | IsaCreateManyInput[]
  }

  /**
   * Isa update
   */
  export type IsaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * The data needed to update a Isa.
     */
    data: XOR<IsaUpdateInput, IsaUncheckedUpdateInput>
    /**
     * Choose, which Isa to update.
     */
    where: IsaWhereUniqueInput
  }

  /**
   * Isa updateMany
   */
  export type IsaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Isas.
     */
    data: XOR<IsaUpdateManyMutationInput, IsaUncheckedUpdateManyInput>
    /**
     * Filter which Isas to update
     */
    where?: IsaWhereInput
  }

  /**
   * Isa upsert
   */
  export type IsaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * The filter to search for the Isa to update in case it exists.
     */
    where: IsaWhereUniqueInput
    /**
     * In case the Isa found by the `where` argument doesn't exist, create a new Isa with this data.
     */
    create: XOR<IsaCreateInput, IsaUncheckedCreateInput>
    /**
     * In case the Isa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IsaUpdateInput, IsaUncheckedUpdateInput>
  }

  /**
   * Isa delete
   */
  export type IsaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
    /**
     * Filter which Isa to delete.
     */
    where: IsaWhereUniqueInput
  }

  /**
   * Isa deleteMany
   */
  export type IsaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Isas to delete
     */
    where?: IsaWhereInput
  }

  /**
   * Isa without action
   */
  export type IsaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Isa
     */
    select?: IsaSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const IsaOptionsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type IsaOptionsScalarFieldEnum = (typeof IsaOptionsScalarFieldEnum)[keyof typeof IsaOptionsScalarFieldEnum]


  export const IsaScalarFieldEnum: {
    userId: 'userId',
    isaOptionId: 'isaOptionId',
    savings: 'savings'
  };

  export type IsaScalarFieldEnum = (typeof IsaScalarFieldEnum)[keyof typeof IsaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type IsaOptionsWhereInput = {
    AND?: IsaOptionsWhereInput | IsaOptionsWhereInput[]
    OR?: IsaOptionsWhereInput[]
    NOT?: IsaOptionsWhereInput | IsaOptionsWhereInput[]
    id?: StringFilter<"IsaOptions"> | string
    name?: StringFilter<"IsaOptions"> | string
  }

  export type IsaOptionsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IsaOptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IsaOptionsWhereInput | IsaOptionsWhereInput[]
    OR?: IsaOptionsWhereInput[]
    NOT?: IsaOptionsWhereInput | IsaOptionsWhereInput[]
    name?: StringFilter<"IsaOptions"> | string
  }, "id">

  export type IsaOptionsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: IsaOptionsCountOrderByAggregateInput
    _max?: IsaOptionsMaxOrderByAggregateInput
    _min?: IsaOptionsMinOrderByAggregateInput
  }

  export type IsaOptionsScalarWhereWithAggregatesInput = {
    AND?: IsaOptionsScalarWhereWithAggregatesInput | IsaOptionsScalarWhereWithAggregatesInput[]
    OR?: IsaOptionsScalarWhereWithAggregatesInput[]
    NOT?: IsaOptionsScalarWhereWithAggregatesInput | IsaOptionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IsaOptions"> | string
    name?: StringWithAggregatesFilter<"IsaOptions"> | string
  }

  export type IsaWhereInput = {
    AND?: IsaWhereInput | IsaWhereInput[]
    OR?: IsaWhereInput[]
    NOT?: IsaWhereInput | IsaWhereInput[]
    userId?: StringFilter<"Isa"> | string
    isaOptionId?: StringFilter<"Isa"> | string
    savings?: FloatFilter<"Isa"> | number
  }

  export type IsaOrderByWithRelationInput = {
    userId?: SortOrder
    isaOptionId?: SortOrder
    savings?: SortOrder
  }

  export type IsaWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: IsaWhereInput | IsaWhereInput[]
    OR?: IsaWhereInput[]
    NOT?: IsaWhereInput | IsaWhereInput[]
    isaOptionId?: StringFilter<"Isa"> | string
    savings?: FloatFilter<"Isa"> | number
  }, "userId">

  export type IsaOrderByWithAggregationInput = {
    userId?: SortOrder
    isaOptionId?: SortOrder
    savings?: SortOrder
    _count?: IsaCountOrderByAggregateInput
    _avg?: IsaAvgOrderByAggregateInput
    _max?: IsaMaxOrderByAggregateInput
    _min?: IsaMinOrderByAggregateInput
    _sum?: IsaSumOrderByAggregateInput
  }

  export type IsaScalarWhereWithAggregatesInput = {
    AND?: IsaScalarWhereWithAggregatesInput | IsaScalarWhereWithAggregatesInput[]
    OR?: IsaScalarWhereWithAggregatesInput[]
    NOT?: IsaScalarWhereWithAggregatesInput | IsaScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Isa"> | string
    isaOptionId?: StringWithAggregatesFilter<"Isa"> | string
    savings?: FloatWithAggregatesFilter<"Isa"> | number
  }

  export type IsaOptionsCreateInput = {
    id?: string
    name: string
  }

  export type IsaOptionsUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type IsaOptionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IsaOptionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IsaOptionsCreateManyInput = {
    id?: string
    name: string
  }

  export type IsaOptionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IsaOptionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type IsaCreateInput = {
    userId: string
    isaOptionId: string
    savings: number
  }

  export type IsaUncheckedCreateInput = {
    userId: string
    isaOptionId: string
    savings: number
  }

  export type IsaUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isaOptionId?: StringFieldUpdateOperationsInput | string
    savings?: FloatFieldUpdateOperationsInput | number
  }

  export type IsaUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isaOptionId?: StringFieldUpdateOperationsInput | string
    savings?: FloatFieldUpdateOperationsInput | number
  }

  export type IsaCreateManyInput = {
    userId: string
    isaOptionId: string
    savings: number
  }

  export type IsaUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isaOptionId?: StringFieldUpdateOperationsInput | string
    savings?: FloatFieldUpdateOperationsInput | number
  }

  export type IsaUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    isaOptionId?: StringFieldUpdateOperationsInput | string
    savings?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IsaOptionsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IsaOptionsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type IsaOptionsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IsaCountOrderByAggregateInput = {
    userId?: SortOrder
    isaOptionId?: SortOrder
    savings?: SortOrder
  }

  export type IsaAvgOrderByAggregateInput = {
    savings?: SortOrder
  }

  export type IsaMaxOrderByAggregateInput = {
    userId?: SortOrder
    isaOptionId?: SortOrder
    savings?: SortOrder
  }

  export type IsaMinOrderByAggregateInput = {
    userId?: SortOrder
    isaOptionId?: SortOrder
    savings?: SortOrder
  }

  export type IsaSumOrderByAggregateInput = {
    savings?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IsaOptionsDefaultArgs instead
     */
    export type IsaOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IsaOptionsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IsaDefaultArgs instead
     */
    export type IsaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IsaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}