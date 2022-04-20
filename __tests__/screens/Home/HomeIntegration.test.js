import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {BASE_URL} from '@env';
import {dataDummyListBook} from '../../../src/helpers/dummyResponse';

describe('API List Book Testing', () => {
  test('API List Book', async () => {
    let mock = new MockAdapter(axios);
    mock
      .onGet('http://code.aldipee.com/api/v1/books?limit=73')
      .reply(200, dataDummyListBook, {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVkNmM2MzYyZmM3MTJmYjlhMjUzZDkiLCJpYXQiOjE2NTA0NTgzMDIsImV4cCI6MTY1MDQ2MDEwMiwidHlwZSI6ImFjY2VzcyJ9.1On9YMt-hoiscWZFf4HxVb5QUb0xza6aRvzBweij278',
      });

    //act
    let res = await axios.get(`${BASE_URL}/books?limit=73`, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MjVkNmM2MzYyZmM3MTJmYjlhMjUzZDkiLCJpYXQiOjE2NTA0NTgzMDIsImV4cCI6MTY1MDQ2MDEwMiwidHlwZSI6ImFjY2VzcyJ9.1On9YMt-hoiscWZFf4HxVb5QUb0xza6aRvzBweij278',
      },
    });

    //assert
    expect(res.data).toEqual(dataDummyListBook);
    expect(res.status).toEqual(200);
  });
});
