import Patient from '../../../models/patient_model/Signup.model';

const Signup = (req, res) => {
    const {
        title, 
        patientFullname
    } = req.body;

    Patient.create({
        user_id: 1,
        title: title,
        patient_fullname: patientFullname,
        gender: 'male',
        genotype: 'aa',
        marital_status: 'single',
        birth_date: new Date(),
        email: 'test@mail.com',
        password: '12333444',
        address: 'address',
        state: 'lagos state',
        country: 'Nigeria',
        phone: +234445445554,
        admission_date: new Date(),
        // discharged_date: ,
        // hmo_card_no: ''
        purpose: 'treatment',
        // photo: ,
        // doctor_id: '',
        // hmo_id: '',
        // hmo_name: '',
        status: 'healthy', 
    })
    .then(value => {
        res.status(200).json({
            value
        })
    })
    .catch(e => {console.log(e)})
}

export default Signup;