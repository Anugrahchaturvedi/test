import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('http://test.k6.io');
  sleep(9);
  sleep(3);
  test
}
