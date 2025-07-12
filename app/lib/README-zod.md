# 🛡️ Zod 설치 및 사용 가이드

프로젝트에 **Zod 4.0.5**가 성공적으로 설치되었습니다!

## 📁 설치된 파일들

- `app/lib/validation-schemas.ts` - 프로젝트용 검증 스키마들
- `app/lib/zod-utils.ts` - Zod 유틸리티 함수들  
- `app/lib/zod-examples.ts` - 실사용 예제들

## 🚀 기본 사용법

### 1. 간단한 스키마 정의

```typescript
import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(2, '이름은 2글자 이상이어야 합니다'),
  email: z.string().email('유효한 이메일을 입력해주세요'),
  age: z.number().min(18, '18세 이상이어야 합니다'),
});

type User = z.infer<typeof UserSchema>;
```

### 2. 데이터 검증

```typescript
// 성공 케이스
const userData = {
  name: '홍길동',
  email: 'hong@example.com',
  age: 25
};

const user = UserSchema.parse(userData); // ✅ 검증 성공

// 안전한 파싱 (예외 발생 안함)
const result = UserSchema.safeParse(userData);
if (result.success) {
  console.log(result.data); // 검증된 데이터
} else {
  console.log(result.error); // 에러 정보
}
```

## 🎯 프로젝트에서 사용하기

### 기존 스키마 사용

```typescript
import { UserSchema, LoginSchema, type User } from '~/lib/validation-schemas';
import { safeParse } from '~/lib/zod-utils';

// 사용자 데이터 검증
const result = safeParse(UserSchema, formData);
if (result.success) {
  // 타입 안전한 데이터 사용
  const user: User = result.data;
}
```

### 폼 검증

```typescript
import { validateForm } from '~/lib/zod-utils';
import { LoginSchema } from '~/lib/validation-schemas';

function handleSubmit(formData: FormData) {
  const result = validateForm(LoginSchema, formData);
  
  if (result.success) {
    // 로그인 처리
    login(result.data);
  } else {
    // 에러 메시지 표시
    showErrors(result.error);
  }
}
```

## 📝 주요 스키마들

### 1. UserSchema
- 사용자 정보 검증
- UUID, 이메일, 나이 제한 등

### 2. LoginSchema  
- 로그인 폼 검증
- 이메일, 비밀번호, 기억하기

### 3. SignupSchema
- 회원가입 폼 검증
- 비밀번호 확인, 약관 동의

### 4. SearchSchema
- 검색 쿼리 검증
- 페이지네이션, 정렬 옵션

## 🛠️ 유틸리티 함수들

### safeParse
```typescript
const result = safeParse(schema, data);
// { success: boolean, data: T | null, error: string[] | null }
```

### validateForm
```typescript
const result = validateForm(schema, formData);
// FormData나 객체를 검증
```

### formatZodError
```typescript
const errors = formatZodError(zodError);
// 사용자 친화적인 에러 메시지 배열
```

## 🎮 예제 실행하기

브라우저 콘솔에서:

```javascript
// 모든 예제 실행
runAllZodExamples();

// 개별 예제 실행  
basicZodExample();
userValidationExample();
formValidationExample();
```

## 🔥 고급 기능들

### 1. 조건부 스키마
```typescript
const PaymentSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('card'),
    cardNumber: z.string().length(16),
  }),
  z.object({
    type: z.literal('bank'), 
    accountNumber: z.string().min(10),
  }),
]);
```

### 2. 데이터 변환
```typescript
const NumberStringSchema = z.string().transform(val => parseInt(val));
```

### 3. 커스텀 검증
```typescript
const schema = z.string().refine(val => val.includes('@'), {
  message: '이메일 형식이어야 합니다'
});
```

## ✨ 주요 장점

- **타입 안전성**: TypeScript와 완벽 호환
- **런타임 검증**: 실행 시점에 데이터 검증
- **사용자 친화적 에러**: 한국어 에러 메시지
- **불변성**: 원본 데이터 변경 없음
- **풍부한 API**: 다양한 검증 옵션

## 🚨 주의사항

1. **성능**: 복잡한 스키마는 성능에 영향
2. **번들 크기**: Zod는 약 20KB (gzipped)  
3. **비동기**: `parseAsync` 사용 시 Promise 반환

---

🎉 **이제 프로젝트에서 안전한 데이터 검증을 시작하세요!** 