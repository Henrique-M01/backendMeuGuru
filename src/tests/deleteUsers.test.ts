import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

chai.use(chaiHttp);

import app from '../App';
import UserService from '../service/UserService'
import { expect } from 'chai';
import { request } from 'chai';

let UserStub: any;

const mock = true;
const mockFail = null;

describe('Ao fazer uma requisicao DELETE a rota /users/:id', () => {
  beforeEach(async function() {
    UserStub = await sinon.stub(UserService, 'deleteUser');
  });

  afterEach(() => {
    UserStub.restore();
  });

  it('Retorna o status 200 e a mensagem correta no corpo da requisicao', async () => {
    UserStub.resolves(mock);

    const chaiHttpResponse = await request(app).delete('/users/1');
    const message = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(200);
    expect(message.message).to.be.equal('User deleted successfully');
  })

  it('Retorna o status 404 e a mensagem correta no corpo da requisicao', async () => {
    UserStub.resolves(mockFail);

    const chaiHttpResponse = await request(app).delete('/users/1');
    const message = chaiHttpResponse.body;

    expect(chaiHttpResponse.status).to.be.equal(404);
    expect(message.message).to.be.equal('User not found');
  })
})