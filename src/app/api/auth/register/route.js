import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";

export default function handler(req, res) {
    if (req.method === 'POST') {
      const { body } = req;
      // Process the request, and send an appropriate response
      res.status(200).json({ message: 'POST request successful'});
    } else {
      res.status(405).end(); // Method not allowed
    }
  }
  