export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0],
    'type-enum': [2, 'always', [
      'feat', /** 기능 추가, 레이아웃 추가 등 새로운 코드 추가 */
      'fix', /** 버그 수정, 기능 수정, 레이아웃 수정 등 기존 코드 수정 */
      'test', /** 테스트 코드 작성 */
      'style', /** 코드 포맷팅(prettier 등)과 같은 코드 형식 수정 */
      'refactor', /** 함수화, 파일 분리, 이름 변경 등 리팩토링 */
      'perf', /** 성능 최적화 */
      'build', /** 빌드에 직접적인 세팅(tsconfig, babel, webpack, docker, eslint 등), 의존성 추가, 버전 업 */
      'ci', /** 자동화 세팅(github action, docker-compose 등)과 관련 */
      'docs', /** 문서 작성, 단순 주석 추가 */
      'chore', 'etc' /** 위에 해당하는 내용이 없는 경우, 기타 수정 */
    ]],
  },
};
