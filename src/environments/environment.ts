// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_endpoint: 'http://localhost:8080',
  admin_endpoint: '',
  get_all_borrowers: '/borrowers',
  borrower_api: '/borrower/',
  book_api: '/book/',
  branch_api: '/branch/',
  deleteAuthor: '/deleteAuthor/',
  get_all_loans: '/loans',
  get_all_authors: '/authors',
  single_author: '/author',
  get_all_branches: '/branches',
  single_branch: '/branch'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
