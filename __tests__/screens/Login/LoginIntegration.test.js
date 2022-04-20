import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {BASE_URL} from '@env';
import {
  dataLogin,
  dummyResponseLogin,
} from '../../../src/helpers/dummyResponse';

describe('API Login Testing', () => {
  test('API Login', async () => {
    let mock = new MockAdapter(axios);
    mock
      .onPost('http://code.aldipee.com/api/v1/auth/login')
      .reply(200, dummyResponseLogin);

    //act
    let res = await axios.post(`${BASE_URL}/auth/login`, dataLogin);

    //assert
    expect(res.data).toEqual(dummyResponseLogin);
    expect(res.status).toEqual(200);
  });
});
