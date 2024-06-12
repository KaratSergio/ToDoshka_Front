import {
  createAsyncThunk,
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
} from '@reduxjs/toolkit';

interface CustomThunkConfig {
  rejectValue: {
    message: string;
  };
}

const thunkMiddleware = <
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends CustomThunkConfig = CustomThunkConfig,
>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> => {
  return createAsyncThunk(
    typePrefix,
    async (arg, thunkAPI) => {
      try {
        return await payloadCreator(arg, thunkAPI);
      } catch (error) {
        console.error('Error:', error);
        return thunkAPI.rejectWithValue({
          message: (error as Error).message,
        });
      }
    },
    options
  ) as unknown as AsyncThunk<Returned, ThunkArg, ThunkApiConfig>;
};

export default thunkMiddleware;
