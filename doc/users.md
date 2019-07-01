# Users

## Authorities

### Authority levels table

| Level | Description |
| ----------- | ----------- |
| 0 | Unauthorized |
| 1 | Subscriber |
| 2 | Contributor |
| 3 | Author |
| 4 | Editor |
| 5 | Administrator |
| 6 | Super Admin |
| 7 | Developer |

### Capabilities table

| Capability | Subscriber  | Contributor | Author | Editor | Administrator | Super Admin | Developer |
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| Authority level | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
| Create new user | :x: | :x: | :x: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Edit user | :x: | :x: | :x: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Delete user | :x: | :x: | :x: | :x: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

## API

### Interface

Available at URL: ```/users```

### Methods

* POST **/users/authenticate** - Sign in with the email & password, generate a token
  ```javascript
  {
    email: <string>,
    password: <string>
  }
  ```

* POST **/users/create** - Create a new user
  ```javascript
  {
    username: <string>, // /[a-zA-Z][a-zA-Z0-9._-]{1,58}[a-zA-Z0-9_-]/g
    password: <string>,
    firstname: <string>,
    lastname: <string>,
    email: <string>,
    authority: <number>
  }
  ```

* GET **/users/list-users** - Get list of users

* GET **/users/check-session** - Check my current token expiration time and get my user ID

* GET **/users/detail/id/:id** - Get user detail (by ID)

* GET **/users/detail/username/:username** - Get user detail (by username)

* PUT **/users/edit/:id** - Edit user
  ```javascript
  {
    username: <string>,
    firstname: <string>,
    lastname: <string>,
    email: <string>,
    authority: <number>
  }
  ```

* PUT **/users/force-change-password/:id** - Change password to other user
  ```javascript
  {
    password: <string>
  }
  ```

* PUT **/users/change-status/:id** - Change activation status
  ```javascript
  {
    status: <number>
  }
  ```

* DELETE **/users/delete/:id** - Delete user (by ID)

* PUT **/users/change-settings** - Change self user settings
  ```javascript
  {
    username: <string>,
    firstname: <string>,
    lastname: <string>,
    email: <string>
  }
  ```

* PUT **/users/change-password** - Change self user password
  ```javascript
  {
    oldPassword: <string>,
    newPassword: <string>
  }
  ```
