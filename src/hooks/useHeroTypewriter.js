import { useState, useEffect } from 'react';

/**
 * Custom hook for smooth sequential typewriter effect without layout shift.
 * Step 1: Types greeting ("Hello, World! I am")
 * Step 2: Types name ("Devang Parmar")
 * Step 3: Types role ("MERN Stack Developer") and cycles related roles smoothly.
 */
export function useHeroTypewriter({
  greetingTarget = "Hello, World! I am",
  nameTarget = "Devang Parmar",
  roleTargets = [
    "MERN Stack Developer",
    "React.js & Node.js Developer",
    "Full-Stack Web Developer"
  ],
  typingSpeed = 45,
  deletingSpeed = 26,
  pauseDelay = 2400
} = {}) {
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [currentLine, setCurrentLine] = useState(1); // 1 = greeting, 2 = name, 3 = role
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeletingRole, setIsDeletingRole] = useState(false);

  // Line 1: Typing Greeting
  useEffect(() => {
    if (currentLine !== 1) return;

    if (greeting.length < greetingTarget.length) {
      const timeout = setTimeout(() => {
        setGreeting(greetingTarget.slice(0, greeting.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentLine(2);
      }, 250);
      return () => clearTimeout(pause);
    }
  }, [greeting, currentLine, greetingTarget, typingSpeed]);

  // Line 2: Typing Name
  useEffect(() => {
    if (currentLine !== 2) return;

    if (name.length < nameTarget.length) {
      const timeout = setTimeout(() => {
        setName(nameTarget.slice(0, name.length + 1));
      }, typingSpeed + 15);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setCurrentLine(3);
      }, 350);
      return () => clearTimeout(pause);
    }
  }, [name, currentLine, nameTarget, typingSpeed]);

  // Line 3: Typing & Cycling Roles
  useEffect(() => {
    if (currentLine !== 3) return;

    const currentTarget = roleTargets[roleIndex] || roleTargets[0];

    if (!isDeletingRole) {
      // Typing forward
      if (role.length < currentTarget.length) {
        const timeout = setTimeout(() => {
          setRole(currentTarget.slice(0, role.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing this role, pause before deleting
        const timeout = setTimeout(() => {
          setIsDeletingRole(true);
        }, pauseDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting backward
      if (role.length > 0) {
        const timeout = setTimeout(() => {
          setRole(currentTarget.slice(0, role.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Pause briefly at empty before switching to next role
        const timeout = setTimeout(() => {
          setIsDeletingRole(false);
          setRoleIndex((prev) => (prev + 1) % roleTargets.length);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [role, isDeletingRole, roleIndex, currentLine, roleTargets, typingSpeed, deletingSpeed, pauseDelay]);

  return {
    greeting,
    name,
    role,
    currentLine
  };
}
