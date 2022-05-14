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
    id: 1,
    email: "silva@email.com",
    name: "Henrique Silva"
  },
  {
    id: 2,
    email: "zeEdu@email.com",
    name: "Jose Eduardo"
  },
  {
    id: 3,
    email: "cacalopes@email.com",
    name: "Camila lopes"
  },
];

const mockFail = null;

describe('Ao fazer uma requisicao GET a rota /user/all', () => {
  beforeEach(async function() {
    UserStub = await sinon.stub(UserService, 'getAll');
  });

  afterEach(() => {
    UserStub.restore();
  });

  it('Retorna a resposta 200 e todos os usuarios do banco dentro de um array', async () => {
    UserStub.resolves(mock);

    const chaiHttpResponse = await request(app).get('/users/all');
    const users = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(users).to.be.an('array');
  })

  it('Retorna a resposta 404 e com uma mensagem na corpo da resposta', async () => {
    UserStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).get('/users/all');
    const users = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(users.message).to.be.equal('Users not found')
  })
})