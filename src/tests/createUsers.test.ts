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

describe('Ao fazer uma requisicao POST a rota /users/create', () => {
  beforeEach(async function() {
    UserStub = await sinon.stub(UserService, 'createUser');
  });

  afterEach(() => {
    UserStub.restore();
  });

  it('Retorna o status 201 e o usuario criado', async () => {
    UserStub.resolves(mock);

    const chaiHttpResponse = await request(app).post('/users/create')
      .send({
        name: "Adriano santos",
        email: "martins56@email.com",
        password: "secret_adriano"
      });
    const user = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(201);
    expect(user[0].id).to.be.equal(mock[0].id);
    expect(user[0].name).to.be.equal(mock[0].name);
    expect(user[0].email).to.be.equal(mock[0].email);
  });

  it('Retorna o status 400 com a mensagem correta no corpo da requisicao', async () => {
    UserStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).post('/users/create')
      .send({
        name: "Adriano santos",
        email: "martins56@email.com",
        password: "secret_adriano"
      });
    const message = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(400);
    expect(message.message).to.be.equal('User already exists');
  })
})