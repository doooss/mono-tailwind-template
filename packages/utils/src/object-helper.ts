/**
 *  TS Omit 에 대응하는 함수
 *  @param {object} object 오브젝트 타입
 *  @param {Array} keys 제외하고 싶은 key 값들 Array
 *  @return {object} obj 에서 keys 제외한 Object
 *  @return object에 object가 아닌 값이 들어올 경우 예외처리로 뒤 값에 상관없이 그대로 리턴
 */

export function _omit<T, K extends (keyof T)[]>(
  object: T,
  keys: K
): Omit<T, (typeof keys)[number]> {
  if (typeof object !== 'object' || !object) return object;

  const _obj = { ...object };
  for (const el of keys) {
    delete _obj[el];
  }

  const __obj: Omit<T, (typeof keys)[number]> = { ..._obj };

  return __obj;
}

/**
 * TS Record 에 대응하는 함수
 * @param {Array} keys 오브젝트 키값 Array
 * @param {Array} values 오브젝트 밸류값 Array
 * @returns {object} keys[key] : values[key] 로 이루어진
 */

export function _record<T extends string | number, K>(
  keys: T[],
  values: K[]
): Record<T, K> {
  const _obj: Partial<Record<T, K>> = {};
  for (let i = 0, _length = keys.length; i < _length; i++) {
    _obj[keys[i]] = values[i];
  }

  const __obj = { ..._obj } as Record<T, K>;

  return __obj;
}

/**
 * TS Pick 에 대응하는 함수
 * @param {Object} object 대상 전체 오브젝트
 * @param {Array} keys pick 할 대상의 key값 Array
 * @returns Pick<Object, typeof keys[number]>
 */
export function _pick<T>(
  object: T,
  keys: (keyof T)[]
): Pick<T, (typeof keys)[number]> {
  if (typeof object !== 'object' || !object) return object;

  const _obj: Partial<T> = {};

  for (const el of keys) {
    _obj[el] = object[el];
  }

  const __obj = { ..._obj } as Pick<T, (typeof keys)[number]>;

  return __obj;
}
