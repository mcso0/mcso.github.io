import { z } from 'zod';
import { 
  UserSchema, 
  LoginSchema, 
  SignupSchema, 
  SearchSchema,
  type User,
  type LoginForm 
} from './validation-schemas';
import { safeParse, validateForm, formatZodError } from './zod-utils';

/**
 * Zod 실사용 예제들
 */

// 1. 기본 사용법 예제
export function basicZodExample() {
  console.log('=== Zod 기본 사용법 ===');

  // 간단한 스키마 정의
  const StringSchema = z.string().min(3, '최소 3글자 이상이어야 합니다');
  
  // 성공적인 파싱
  try {
    const result = StringSchema.parse('안녕하세요');
    console.log('✅ 성공:', result);
  } catch (error) {
    console.log('❌ 실패:', error);
  }
  
  // 실패하는 파싱
  try {
    const result = StringSchema.parse('짧');
    console.log('✅ 성공:', result);
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log('❌ 실패:', formatZodError(error));
    }
  }
}

// 2. 사용자 데이터 검증 예제
export function userValidationExample() {
  console.log('\n=== 사용자 데이터 검증 ===');

  const validUserData = {
    id: '123e4567-e89b-12d3-a456-426614174000',
    username: 'johndoe',
    email: 'john@example.com',
    age: 25,
    bio: '안녕하세요! 개발자입니다.',
    isActive: true,
  };

  const invalidUserData = {
    id: '잘못된-uuid',
    username: 'jo', // 너무 짧음
    email: '잘못된이메일',
    age: 10, // 13세 미만
  };

  // 유효한 데이터 검증
  const validResult = safeParse(UserSchema, validUserData);
  if (validResult.success) {
    console.log('✅ 유효한 사용자 데이터:', validResult.data.username);
  }

  // 무효한 데이터 검증
  const invalidResult = safeParse(UserSchema, invalidUserData);
  if (!invalidResult.success) {
    console.log('❌ 무효한 데이터 오류들:');
    invalidResult.error?.forEach(err => console.log(`  - ${err}`));
  }
}

// 3. 폼 데이터 검증 예제
export function formValidationExample() {
  console.log('\n=== 폼 데이터 검증 ===');

  // FormData 시뮬레이션
  const formData = new FormData();
  formData.append('email', 'user@example.com');
  formData.append('password', 'Password123');
  formData.append('rememberMe', 'true');

  const result = validateForm(LoginSchema, formData);
  
  if (result.success) {
    console.log('✅ 로그인 폼 검증 성공');
    console.log('  이메일:', result.data.email);
    console.log('  기억하기:', result.data.rememberMe);
  } else {
    console.log('❌ 로그인 폼 검증 실패:', result.error);
  }
}

// 4. 회원가입 폼 검증 예제
export function signupValidationExample() {
  console.log('\n=== 회원가입 폼 검증 ===');

  const signupData = {
    username: 'newuser',
    email: 'newuser@example.com',
    password: 'StrongPass123',
    confirmPassword: 'StrongPass123',
    terms: true,
  };

  const weakPasswordData = {
    username: 'weakuser',
    email: 'weak@example.com',
    password: 'weak', // 약한 비밀번호
    confirmPassword: 'different', // 다른 비밀번호
    terms: false, // 약관 동의 안함
  };

  // 성공 케이스
  const successResult = safeParse(SignupSchema, signupData);
  if (successResult.success) {
    console.log('✅ 회원가입 데이터 유효함');
  }

  // 실패 케이스
  const failResult = safeParse(SignupSchema, weakPasswordData);
  if (!failResult.success) {
    console.log('❌ 회원가입 데이터 오류들:');
    failResult.error?.forEach(err => console.log(`  - ${err}`));
  }
}

// 5. 검색 쿼리 파라미터 검증 예제
export function searchQueryExample() {
  console.log('\n=== 검색 쿼리 검증 ===');

  // URL 쿼리 파라미터 시뮬레이션
  const queryParams = {
    query: 'React',
    category: 'posts',
    sortBy: 'date',
    page: '2',
    limit: '10',
  };

  // 문자열 숫자를 실제 숫자로 변환하는 스키마
  const SearchWithTransform = SearchSchema.transform(data => ({
    ...data,
    page: typeof data.page === 'string' ? parseInt(data.page) : data.page,
    limit: typeof data.limit === 'string' ? parseInt(data.limit) : data.limit,
  }));

  const result = safeParse(SearchWithTransform, queryParams);
  
  if (result.success) {
    console.log('✅ 검색 쿼리 파싱 성공:');
    console.log('  검색어:', result.data.query);
    console.log('  카테고리:', result.data.category);
    console.log('  페이지:', result.data.page, '(타입:', typeof result.data.page, ')');
  }
}

// 6. 배열 데이터 검증 예제
export function arrayValidationExample() {
  console.log('\n=== 배열 데이터 검증 ===');

  const UserArraySchema = z.array(UserSchema.pick({
    username: true,
    email: true,
    age: true,
  }));

  const usersData = [
    { username: 'user1', email: 'user1@example.com', age: 25 },
    { username: 'u2', email: '잘못된이메일', age: 15 }, // 여러 오류
    { username: 'user3', email: 'user3@example.com', age: 30 },
  ];

  const result = safeParse(UserArraySchema, usersData);
  
  if (result.success) {
    console.log('✅ 모든 사용자 데이터 유효함');
    console.log('  유효한 사용자 수:', result.data.length);
  } else {
    console.log('❌ 배열 검증 실패:', result.error);
  }
}

// 7. 조건부 스키마 예제
export function conditionalSchemaExample() {
  console.log('\n=== 조건부 스키마 ===');

  const PaymentSchema = z.discriminatedUnion('type', [
    z.object({
      type: z.literal('card'),
      cardNumber: z.string().length(16, '카드번호는 16자리여야 합니다'),
      expiryDate: z.string().regex(/^\d{2}\/\d{2}$/, 'MM/YY 형식이어야 합니다'),
    }),
    z.object({
      type: z.literal('bank'),
      accountNumber: z.string().min(10, '계좌번호는 최소 10자리여야 합니다'),
      bankCode: z.string().length(3, '은행코드는 3자리여야 합니다'),
    }),
  ]);

  const cardPayment = {
    type: 'card',
    cardNumber: '1234567890123456',
    expiryDate: '12/25',
  };

  const bankPayment = {
    type: 'bank',
    accountNumber: '1234567890',
    bankCode: '123',
  };

  console.log('카드 결제 검증:', safeParse(PaymentSchema, cardPayment).success ? '✅' : '❌');
  console.log('계좌 결제 검증:', safeParse(PaymentSchema, bankPayment).success ? '✅' : '❌');
}

// 8. 모든 예제 실행 함수
export function runAllZodExamples() {
  basicZodExample();
  userValidationExample();
  formValidationExample();
  signupValidationExample();
  searchQueryExample();
  arrayValidationExample();
  conditionalSchemaExample();
  
  console.log('\n🎉 모든 Zod 예제 실행 완료!');
}

// 브라우저/Node.js에서 바로 실행 가능한 형태로 export
if (typeof window !== 'undefined') {
  // 브라우저 환경
  (window as any).zodExamples = {
    runAll: runAllZodExamples,
    basic: basicZodExample,
    user: userValidationExample,
    form: formValidationExample,
    signup: signupValidationExample,
    search: searchQueryExample,
    array: arrayValidationExample,
    conditional: conditionalSchemaExample,
  };
} 