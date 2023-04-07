import React, { FormEvent, useState } from 'react'
import {motion} from 'framer-motion';
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import { MaterialInput } from './material-input';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ContactMe() {

  function sendEmail(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7amu1v8', e.currentTarget ,'ikAAtWytT81Fh1Ivm')
    .then((result: EmailJSResponseStatus) => {
    console.log(result.text);
    }, (error) => {
    console.log(error.text);
    })
  }

  const [identity, setIdentity] = useState<string>("");
  const [formState, setFormState] = useState({
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

  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

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
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative flex flex-col items-center justify-center h-screen max-w-full px-10 mx-auto overflow-hidden md:flex-row text-paper '>
      <h3 className='absolute top-24 tracking-[15px] text-2xl'>get in touch</h3>
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
      <button
                onClick={handleClick(TransitionLeft)}
                type="submit"
                value="Send"
                className="w-full py-2 my-3 text-paper rounded-xl border-[#F08080] border tracking-widest hover:bg-gray-500/40 hover:duration-500"
              >
                Submit
              </button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} TransitionComponent={transition} key={transition ? transition.name : ''}>
        <Alert onClose={handleClose} sx={{ width: '100%', background: '#F08080' }}>
          Message Sent!
        </Alert>
      </Snackbar>
              
    
      </form>
    </motion.div>
  )
}

export default ContactMe