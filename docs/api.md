# API endpoints

## GET

### /api/v1/user_avatar

#### Description

Get the avatar of a user.

#### Parameters

- `user_id` (int): The ID of the user.

#### Response

- `avatar` (str): The base64 encoded avatar of the user.

#### implementation

base64 encoded avatar will load from redis database and return to the user.

### /api/v1/welcome_message

#### Description

Get the welcome message of the user.

#### Parameters

- `user_id` (int): The ID of the user.

#### Response

- `message` (str): The welcome message of the user.

#### implementation

welcome message will load from a set of welcome messages and return to the user.

### /api/v1/progress_digest

#### Description

Get the progress digest of the user.

#### Parameters

- `user_id` (int): The ID of the user.

#### Response

- `progress` (str): The progress digest of the user.

#### implementation

progress digest will load from a set of progress digests and return to the user.