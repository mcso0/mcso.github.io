import { DateTime, Duration, Interval } from 'luxon';

/**
 * 날짜/시간 유틸리티 함수들 (Luxon 기반)
 */

// 현재 시간 가져오기
export const getCurrentTime = () => {
  return DateTime.now();
};

// 특정 날짜 생성하기
export const createDate = (year: number, month: number, day: number) => {
  return DateTime.local(year, month, day);
};

// ISO 문자열에서 날짜 파싱하기
export const parseISODate = (isoString: string) => {
  return DateTime.fromISO(isoString);
};

// 한국어로 날짜 포맷하기
export const formatToKorean = (dateTime: DateTime) => {
  return dateTime.setLocale('ko').toLocaleString(DateTime.DATETIME_FULL);
};

// 상대적 시간 표시 (예: "3시간 전")
export const getRelativeTime = (dateTime: DateTime) => {
  return dateTime.setLocale('ko').toRelative();
};

// 두 날짜 사이의 차이 계산
export const getDifference = (start: DateTime, end: DateTime) => {
  return end.diff(start, ['days', 'hours', 'minutes']);
};

// 날짜에 시간 더하기
export const addTime = (dateTime: DateTime, amount: { days?: number; hours?: number; minutes?: number }) => {
  return dateTime.plus(amount);
};

// 날짜에서 시간 빼기
export const subtractTime = (dateTime: DateTime, amount: { days?: number; hours?: number; minutes?: number }) => {
  return dateTime.minus(amount);
};

// 하루의 시작/끝 시간
export const getStartOfDay = (dateTime: DateTime) => {
  return dateTime.startOf('day');
};

export const getEndOfDay = (dateTime: DateTime) => {
  return dateTime.endOf('day');
};

// 타임존 변경
export const changeTimezone = (dateTime: DateTime, timezone: string) => {
  return dateTime.setZone(timezone);
};

// 유효성 검증
export const isValidDate = (dateTime: DateTime) => {
  return dateTime.isValid;
};

// 현재 시간을 여러 포맷으로 출력하는 예제
export const getFormattedNow = () => {
  const now = DateTime.now().setLocale('ko');
  
  return {
    iso: now.toISO(),
    korean: now.toLocaleString(DateTime.DATETIME_FULL),
    date: now.toLocaleString(DateTime.DATE_FULL),
    time: now.toLocaleString(DateTime.TIME_24_SIMPLE),
    relative: now.toRelative(),
    custom: now.toFormat('yyyy년 MM월 dd일 HH:mm:ss')
  };
}; 