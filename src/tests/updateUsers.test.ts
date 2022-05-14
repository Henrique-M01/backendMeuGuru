import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import app from '../App';
import UserService from '../service/UserService'
import { expect } from 'chai';
import { request } from 'chai';

let UserStub: any;

const mock = [
  {
    id: 7,
    name: "Adriano santos",
    email: "martins56@email.com"
  }
];
const mockFail = null;

describe('Ao fazer uma requisicao PUT a rota /users/:id', () => {
  beforeEach(async function() {
    UserStub = await sinon.stub(UserService, 'updateUser');
  });

  afterEach(() => {
    UserStub.restore();
  });

  it('Retorna o status 200 e o usuario atualizado', async () => {
    UserStub.resolves(mock);

    const chaiHttpResponse = await request(app).put('/users/2')
      .send({
        name: "Adriano santos",
        email: "martins56@email.com",
        password: "secret_adriano"
      });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(user[0].id).to.be.equal(mock[0].id);
    expect(user[0].name).to.be.equal(mock[0].name);
    expect(user[0].email).to.be.equal(mock[0].email);
  });

  it('Retorna o status 404 com a mensagem correta no corpo da requisicao', async () => {
    UserStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).put('/users/2')
      .send({
        name: "Adriano santos",
        email: "martins56@email.com",
        password: "secret_adriano"
      });
    const message = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(message.message).to.be.equal('User not found');
  })
})