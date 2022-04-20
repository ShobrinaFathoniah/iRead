import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {BASE_URL} from '@env';
import {
  dataRegister,
  dummyResponseRegister,
} from '../../../src/helpers/dummyResponse';

describe('API Register Testing', () => {
  test('API Register', async () => {
    let mock = new MockAdapter(axios);
    mock
      .onPost('http://code.aldipee.com/api/v1/auth/register')
      .reply(200, dummyResponseRegister);

    //act
    let res = await axios.post(`${BASE_URL}/auth/register`, dataRegister);

    //assert
    expect(res.data).toEqual(dummyResponseRegister);
    expect(res.data.data.role).toEqual('user');
    expect(res.data.success).toEqual(true);
    expect(res.status).toEqual(200);
  });
});
