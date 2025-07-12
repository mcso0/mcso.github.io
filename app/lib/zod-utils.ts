import { z } from 'zod';

/**
 * Zod 관련 유틸리티 함수들 (Zod 4 호환)
 */

// 1. 안전한 파싱 함수
export function safeParse<T>(schema: z.ZodSchema<T>, data: unknown) {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return {
      success: true as const,
      data: result.data,
      error: null,
    };
  } else {
    return {
      success: false as const,
      data: null,
      error: formatZodError(result.error),
    };
  }
}

// 2. Zod 에러를 사용자 친화적인 메시지로 변환
export function formatZodError(error: z.ZodError): string[] {
  return error.issues.map((err: any) => {
    const path = err.path.join('.');
    return path ? `${path}: ${err.message}` : err.message;
  });
}

// 3. 폼 검증 함수
export function validateForm<T>(
  schema: z.ZodSchema<T>, 
  formData: FormData | Record<string, unknown>
) {
  let data: Record<string, unknown>;
  
  if (formData instanceof FormData) {
    data = Object.fromEntries(formData.entries());
  } else {
    data = formData;
  }
  
  return safeParse(schema, data);
}

// 4. 부분 업데이트 스키마 생성
export function createUpdateSchema<T extends z.ZodRawShape>(
  originalSchema: z.ZodObject<T>
) {
  return originalSchema.partial();
}

// 5. 환경 변수 검증
export function validateEnv<T>(schema: z.ZodSchema<T>, env: Record<string, string | undefined>) {
  try {
    return schema.parse(env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error('환경 변수 검증 실패:', formatZodError(error));
      throw new Error('환경 변수 설정을 확인해주세요');
    }
    throw error;
  }
}

// 6. API 응답 검증
export async function validateApiResponse<T>(
  schema: z.ZodSchema<T>,
  response: Response
): Promise<T> {
  if (!response.ok) {
    throw new Error(`API 요청 실패: ${response.status} ${response.statusText}`);
  }
  
  const data = await response.json();
  return schema.parse(data);
}

// 7. 타입 가드 함수 생성
export function createTypeGuard<T>(schema: z.ZodSchema<T>) {
  return (value: unknown): value is T => {
    return schema.safeParse(value).success;
  };
}

// 8. 스키마 조합 함수
export function mergeSchemas<T extends z.ZodRawShape, U extends z.ZodRawShape>(
  schema1: z.ZodObject<T>,
  schema2: z.ZodObject<U>
) {
  return schema1.merge(schema2);
}

// 9. 스키마 필드 검증
export function validateField<T>(
  schema: z.ZodSchema<T>,
  fieldValue: unknown,
  fieldName?: string
): { isValid: boolean; error?: string } {
  const result = schema.safeParse(fieldValue);
  
  if (result.success) {
    return { isValid: true };
  } else {
    const errorMessage = result.error.issues[0]?.message || '잘못된 값입니다';
    const fullMessage = fieldName ? `${fieldName}: ${errorMessage}` : errorMessage;
    return { isValid: false, error: fullMessage };
  }
}

// 10. 간단한 데이터 변환 함수
export function transformAndValidate<T, U>(
  data: T,
  transformer: (data: T) => U,
  schema: z.ZodSchema<U>
): U {
  const transformed = transformer(data);
  return schema.parse(transformed);
}

// 11. 배열 데이터 검증
export function validateArray<T>(
  schema: z.ZodSchema<T>,
  items: unknown[]
): { valid: T[]; invalid: { item: unknown; error: string }[] } {
  const valid: T[] = [];
  const invalid: { item: unknown; error: string }[] = [];
  
  items.forEach(item => {
    const result = schema.safeParse(item);
    if (result.success) {
      valid.push(result.data);
    } else {
      invalid.push({
        item,
        error: formatZodError(result.error).join(', ')
      });
    }
  });
  
  return { valid, invalid };
}

// 12. 스키마 요약 정보 (디버깅용)
export function getSchemaInfo(schema: z.ZodSchema): {
  type: string;
  description?: string;
} {
  return {
    type: 'ZodSchema',
    description: schema.description,
  };
} 