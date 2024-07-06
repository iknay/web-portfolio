import React, { FormEvent, useState } from 'react';
import { motion, Transition } from 'framer-motion';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { MaterialInput } from './material-input';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import Link from 'next/link';
import { IoArrowUpCircleSharp } from "react-icons/io5";

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactMe() {
  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    if (formState.email && formState.message) {
      emailjs
        .sendForm('gmail', 'template_7amu1v8', e.currentTarget, 'ikAAtWytT81Fh1Ivm')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            handleClick(TransitionLeft)();
            setMessageSent(true); // Set messageSent to true
            setFormState({ name: "", email: "", message: "" }); // Clear form fields
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setOpen(true);
    }
  }

  const [identity, setIdentity] = useState<string>("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(evt: any) {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  }

  const [open, setOpen] = React.useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const [transition, setTransition] = React.useState<React.ComponentType<TransitionProps> | undefined>(undefined);

  const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='relative flex flex-col items-center justify-center h-screen max-w-full overflow-hidden pt-14 text-primary'
    >
      <div className='border-2 border-solid rounded-[80px] border-primary lg:pl-20 lg:pr-20 pl-5 pr-5 pt-10 pb-10'>
      <h1 className='pb-8 font-normal text-center text-md lg:text-xl'>Drop me a message</h1>
      <form onSubmit={sendEmail}>
        <div className='pt-4 space-y-4'>
          <MaterialInput
            colorTheme="white"
            type="text"
            label="Name"
            size="medium"
            fullWidth
            name="name"
            required
            value={identity}
            onChange={(e) => {
              setIdentity(e.target.value);
            }}
          />
          <MaterialInput
            colorTheme="white"
            required
            type='email'
            name="email"
            label="Email Address"
            size="medium"
            value={formState.email}
            onChange={handleInputChange}
            fullWidth
          />
          <MaterialInput
            colorTheme="white"
            required
            name="message"
            label="Message"
            size="medium"
            multiline
            inputProps={{
              style: {
                height: "100px",
              },
            }}
            value={formState.message}
            onChange={handleInputChange}
            fullWidth
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
            type="submit"
            value="Send"
            className="py-2 mt-3 tracking-widest border-2 rounded-full text-md lg:text-xl w-52 text-primary border-primary button"
          >
            Send
          </button>
        </div>
        
      </form>
      </div>

      <div className="flex items-center justify-center">
            <motion.button
            animate={{ y: -20 }}
            transition={{ 
            ease: "linear", 
            duration: 1, 
            repeat: Infinity, 
            type: "spring",
            damping: 10,
            repeatType: "reverse"
            } as Transition }
            className='pt-10'><Link href='#main'><IoArrowUpCircleSharp className="text-primary" size={60}/></Link></motion.button>
      </div>
      
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ''}
      >
        <Alert onClose={handleClose} sx={{ width: '100%', background: '#F08080' }}>
          Message Sent!
        </Alert>
      </Snackbar>

    </motion.div>
  );
}

export default ContactMe;


// import React, { FormEvent, useState } from 'react'
// import {motion} from 'framer-motion';
// import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
// import { MaterialInput } from './material-input';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';
// import Slide, { SlideProps } from '@mui/material/Slide';

// type TransitionProps = Omit<SlideProps, 'direction'>;

// function TransitionLeft(props: TransitionProps) {
//   return <Slide {...props} direction="left" />;
// }

// const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref,
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// function ContactMe() {

//   function sendEmail(e: FormEvent<HTMLFormElement>): void {
//     e.preventDefault();

//     emailjs.sendForm('gmail', 'template_7amu1v8', e.currentTarget ,'ikAAtWytT81Fh1Ivm')
//     .then((result: EmailJSResponseStatus) => {
//     console.log(result.text);
//     }, (error) => {
//     console.log(error.text);
//     })
//   }

//   const [identity, setIdentity] = useState<string>("");
//   const [formState, setFormState] = useState({
//     email: "",
//     message: "",
//   });

//   function handleInputChange(evt: any) {
//     const value = evt.target.value;
//     setFormState({
//       ...formState,
//       [evt.target.name]: value,
//     });
//   }
  
//   const [open, setOpen] = React.useState(false);

//   const [transition, setTransition] = React.useState<
//     React.ComponentType<TransitionProps> | undefined
//   >(undefined);

//   const handleClick = (Transition: React.ComponentType<TransitionProps>) => () => {
//     setTransition(() => Transition);
//     setOpen(true);
//   };

//   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
//     if (reason === 'clickaway') {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <motion.div 
//     initial={{opacity:0}}
//     whileInView={{opacity:1}}
//     transition={{duration:1.5}}
//     className='relative flex flex-col items-center justify-center h-screen max-w-full px-10 mx-auto overflow-hidden text-paper '>
//       <h3 className='tracking-[10px] md:text-6xl text-xl font-semibold pb-8'>get in touch</h3>
//       <form onSubmit={sendEmail}>
//       <div className='pt-4 space-y-4'>
//       <MaterialInput
//                 colorTheme="white"
//                 type="text"
//                 label="Name"
//                 size="medium"
//                 fullWidth
//                 name="name"
//                 required
//                 value={identity}
//                 onChange={(e) => {
//                   setIdentity(e.target.value);
//                 }}
//               />
//       <MaterialInput
//                   colorTheme="white"
//                   required
//                   type='email'
//                   name="email"
//                   label="Email Address"
//                   size="medium"
//                   value={formState.email}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />
//       <MaterialInput
//                   colorTheme="white"
//                   required
//                   name="message"
//                   label="Message"
//                   size="medium"
//                   multiline
//                   inputProps={{
//                     style: {
//                       height: "100px",
//                     },
//                   }}
//                   value={formState.message}
//                   onChange={handleInputChange}
//                   fullWidth
//                 />    
//       </div>
//       <button
//                 onClick={handleClick(TransitionLeft)}
//                 type="submit"
//                 value="Send"
//                 className="w-full py-2 my-3 tracking-widest border-2 text-paper rounded-xl border-accent2 hover:bg-accent2 hover:bg-opacity-25 hover:duration-500"
//               >
//                 Send
//               </button>
//       <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={transition} key={transition ? transition.name : ''}>
//         <Alert onClose={handleClose} sx={{ width: '100%', background: '#F08080' }}>
//           Message Sent!
//         </Alert>
//       </Snackbar>        
//       </form>
//       <div className='mt-6 tracking-wider text-center text-paper'>
//         <p>or you can message me through my email <span className=' text-[#F1CCBF]'>yanceevillanueva16@gmail.com</span></p>
//       </div>
//     </motion.div>
//   )
// }

// export default ContactMe