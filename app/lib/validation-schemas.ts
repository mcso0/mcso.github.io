import { z } from 'zod';

/**
 * 프로젝트에서 사용할 Zod 검증 스키마들
 */

// 1. 사용자 관련 스키마
export const UserSchema = z.object({
  id: z.string().uuid('유효한 UUID를 입력해주세요'),
  username: z.string()
    .min(3, '사용자명은 최소 3글자 이상이어야 합니다')
    .max(20, '사용자명은 최대 20글자까지 가능합니다')
    .regex(/^[a-zA-Z0-9_]+$/, '사용자명은 영문, 숫자, 언더스코어만 허용됩니다'),
  email: z.string().email('유효한 이메일 주소를 입력해주세요'),
  age: z.number().int().min(13, '13세 이상만 가입 가능합니다').max(120),
  bio: z.string().max(500, '소개글은 500글자 이하로 작성해주세요').optional(),
  avatar: z.string().url('유효한 URL을 입력해주세요').optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
});

export type User = z.infer<typeof UserSchema>;

// 2. 게시글 관련 스키마
export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1, '제목을 입력해주세요').max(100, '제목은 100글자 이하로 입력해주세요'),
  content: z.string().min(10, '내용은 최소 10글자 이상 작성해주세요'),
  authorId: z.string().uuid(),
  tags: z.array(z.string()).max(10, '태그는 최대 10개까지 추가할 수 있습니다').default([]),
  isPublished: z.boolean().default(false),
  publishedAt: z.date().optional(),
  updatedAt: z.date().default(() => new Date()),
});

export type Post = z.infer<typeof PostSchema>;

// 3. 로그인 폼 스키마
export const LoginSchema = z.object({
  email: z.string().email('유효한 이메일을 입력해주세요'),
  password: z.string().min(8, '비밀번호는 최소 8글자 이상이어야 합니다'),
  rememberMe: z.boolean().optional(),
});

export type LoginForm = z.infer<typeof LoginSchema>;

// 4. 회원가입 폼 스키마
export const SignupSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string()
    .min(8, '비밀번호는 최소 8글자 이상이어야 합니다')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, '비밀번호는 대문자, 소문자, 숫자를 포함해야 합니다'),
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, '이용약관에 동의해야 합니다'),
}).refine(data => data.password === data.confirmPassword, {
  message: "비밀번호가 일치하지 않습니다",
  path: ["confirmPassword"],
});

export type SignupForm = z.infer<typeof SignupSchema>;

// 5. 검색 쿼리 스키마
export const SearchSchema = z.object({
  query: z.string().min(1, '검색어를 입력해주세요').max(100),
  category: z.enum(['all', 'posts', 'users', 'products']).default('all'),
  sortBy: z.enum(['relevance', 'date', 'popularity']).default('relevance'),
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export type SearchQuery = z.infer<typeof SearchSchema>;

// 6. 파일 업로드 스키마
export const FileUploadSchema = z.object({
  file: z.instanceof(File),
  alt: z.string().optional(),
}).refine(data => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  return allowedTypes.includes(data.file.type);
}, {
  message: 'JPEG, PNG, GIF, WebP 파일만 업로드 가능합니다',
  path: ['file']
}).refine(data => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  return data.file.size <= maxSize;
}, {
  message: '파일 크기는 5MB 이하여야 합니다',
  path: ['file']
});

export type FileUpload = z.infer<typeof FileUploadSchema>;

// 7. API 응답 스키마
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
  pagination: z.object({
    page: z.number(),
    limit: z.number(),
    total: z.number(),
    totalPages: z.number(),
  }).optional(),
});

export type ApiResponse = z.infer<typeof ApiResponseSchema>;

// 8. 설정 스키마
export const SettingsSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).default('system'),
  language: z.enum(['ko', 'en', 'ja']).default('ko'),
  notifications: z.object({
    email: z.boolean().default(true),
    push: z.boolean().default(false),
    comments: z.boolean().default(true),
    mentions: z.boolean().default(true),
  }).default({
    email: true,
    push: false,
    comments: true,
    mentions: true,
  }),
  privacy: z.object({
    showEmail: z.boolean().default(false),
    showAge: z.boolean().default(false),
    allowMessages: z.boolean().default(true),
  }).default({
    showEmail: false,
    showAge: false,
    allowMessages: true,
  }),
});

export type Settings = z.infer<typeof SettingsSchema>; 