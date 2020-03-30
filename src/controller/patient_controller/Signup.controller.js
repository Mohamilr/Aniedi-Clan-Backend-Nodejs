import cloudinary from 'cloudinary';
import { validationResult } from 'express-validator';
import Patient from '../../../models/patient_model/Signup.model';
// formatted response
import jsonResponse from '../../helper/JsonResponse';
// import cloudinary for picture upload
import cloudinaryConfig from '../../config/Cloudinary.config';

const Signup = async (req, res) => {
    try {
        const errors = validationResult(req);

        const {
            title,
            gender,
            genotype,
            maritalStatus,
            birthDate,
            email, // either here or user table
            address,
            state,
            country,
            phone, // either here or user table
            admissionDate,
            dischargedDate,
            hmoCardNo, // either here or user table
            purpose,
            hmoId, // either here or user table
            hmoName, // either here or user table
            status,
        } = req.body;

        let photo = req.files.photo;

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }

        // check if values exist in the dataase
        let data = await Patient.findOne({ where: { email: email} });
        if (data === null ) {
            // cloudinary upload
        cloudinary.v2.uploader.upload(photo.tempFilePath, { resourse_type: 'image' })
        .then(async (result) => {

            Patient.create({
                user_id: 2, // will be supplied from user table
                title: title,
                patient_fullname: 'patientFullname', // will be supplied from user table
                gender: gender,
                genotype: genotype,
                marital_status: maritalStatus,
                birth_date: birthDate,
                email: email, // either here or user table
                password: '12333444', // will be supplied from user table
                address: address,
                state: state,
                country: country,
                phone: phone, // either here or user table
                admission_date: admissionDate,
                discharged_date: dischargedDate,
                hmo_card_no: hmoCardNo, // either here or user table
                purpose: purpose,
                photo: result.secure_url, // cloudinary link
                doctor_id: '4432344',
                hmo_id: '454', // either here or user table
                hmo_name: hmoName, // either here or user table
                status: status,
            })
                .then(value => {
                    // response
                    return jsonResponse(res, 'success', 201, value)
                })
                .catch((e) =>
            console.log(e)
        )
        })
        .catch(e => { console.log(e) })

        
        }
        else {
            return jsonResponse(res, 'error', 400, 'patient already belong to this HMO');
        }

        // else if (data === null) {
        //             console.log()
        //         }

        // Patient.findOne({ where: { email: email, hmo_name: hmoName } })
        // .then(data => {
        //     // let ans = [data]
        //     if (data == null) {
        //        console.log('continue'); 
        //     }
        //     else if (data.email === email) {
        //         return jsonResponse(res, 'error', 400, data);
        //     }
        // })
        // .catch(e => console.log(e))
    
        

    }
    catch (e) {
        console.log(e)
    }

}

export default Signup;