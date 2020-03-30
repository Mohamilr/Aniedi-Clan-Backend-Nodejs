import chai from 'chai';
import chaiHttp from 'chai-http';
// to test file upload
import path from 'path';

// import app
import app from '../../app';
// sequilize
import { sequilize } from '../../../models/index';
import patient from '../../../models/patient_model/Signup.model'

chai.use(chaiHttp);
chai.should();

describe('Patient Sign up', () => {

    before(async () => {
        await patient.destroy({
            where: {},
            truncate: true
        })
    })
    
    it('should add a new patient', (done) => {
        chai.request(app)
        .post('/api/v1/patient/signup')
        .attach('photo', path.join(__dirname, '../test_images/image.jpg'))
        .field('title', 'MR')
        .field('gender', 'male')
        .field('genotype', 'AA')
        .field('maritalStatus', 'single')
        .field('birthDate', '2020-03-26T11:11:31.252Z')
        .field('email', 'single@mail.com')
        .field('address', '25 single street')
        .field('state', 'Lagos')
        .field('country', 'Nigeria')
        .field('phone', '+2341234567890')
        .field('admissionDate', '2020-03-26T11:11:31.252Z')
        .field('dischargedDate', '2020-03-26T11:11:31.252Z')
        .field('hmoCardNo', '2341234567890')
        .field('purpose', 'treatment')
        .field('hmoId', '2341234567890')
        .field('hmoName', 'AXA MANSARD')
        .field('status', 'sick')
        .end((err, res) => {
            res.should.have.status(201);
        })
        done();
    })

    // will be updated
    // it('should give error if patient exists', async (done) => {
    //    chai.request(app)
    //     .post('/api/v1/patient/signup')
    //     .attach('photo', path.join(__dirname, '../test_images/image.jpg'))
    //     .field('title', 'MRS')
    //     .field('gender', 'female')
    //     .field('genotype', 'AS')
    //     .field('maritalStatus', 'married')
    //     .field('birthDate', '2020-03-26T11:11:31.252Z')
    //     .field('email', 'single@mail.com')
    //     .field('address', '25 single street')
    //     .field('state', 'Lagos')
    //     .field('country', 'Nigeria')
    //     .field('phone', '+2341234567890')
    //     .field('admissionDate', '2020-03-26T11:11:31.252Z')
    //     .field('dischargedDate', '2020-03-26T11:11:31.252Z')
    //     .field('hmoCardNo', '2341234567890')
    //     .field('purpose', 'treatment')
    //     .field('hmoId', '2341234567890')
    //     .field('hmoName', 'AXA MANSARD 1')
    //     .field('status', 'healthy')
    //     .end((err, res) => {
    //         res.should.have.status(400);
    //     })
    //     done();
    // })

})