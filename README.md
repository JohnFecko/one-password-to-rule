# OPTR - One Password to Rule

Is it possible to create of easy to remember, hard to guess secure deterministic passwords framework. Do we have the ability to recover all of our passwords from memory?

This project is meant to be an experiment on deterministic password generation and management.

## Motivation

* Passwords are part of our day to day life.
* We are highly dependent on online services that require credentials.
* Are password managers secure, and do we trust them? [Password Managers have security flaws](https://www.washingtonpost.com/technology/2019/02/19/password-managers-have-security-flaw-you-should-still-use-one)

## The Deterministic approach and it's flaws

There are a lot of discussion about deterministic approach to a password manager. However the average user would be much better off using a deterministic password then their current password.

[Only 20% of users use different passwords for the online logins](https://www.statista.com/statistics/763091/us-use-of-same-online-passwords/)

## Ground Rules

We are minimizing the scope on how we want to tackle this problem, so it's essential we set some limitations and rules on how we will approach it.

* Passwords should be compliant with the latest NIST guidelines.
* We don't plan on creating passwords that are compatible with every single service out there. Some online services have unreasonable requirements. The 80/20 rule will apply in this case.
* You should still use a password manager. This might seem controversial, however being able to remember all your password is great, but at least in the beginning we will assume a password manager is used on day to day routine.
* Therefore the main focus on this is being able to recover all your password, when not having access to your password manager. i.e. Losing your master key, not having quick access when you need it, and etc.

## Goal

The main goal initially is to be able to create a straightforward system in which you can recover your passwords from memory if it's ever needed.

## Project Structure

During this experiment we will be trying a few different things, and it's important that we have some shared code in between those solutions.

```html
├── packages
│   ├── lib
│   ├── extension
│   ├── components
│   ├── site
```

## Current Implementation

There is a lot of room for improvement on this, but its important that we keep the cognitive load to a minimum, and user should be able to recover passwords without being dependent on the project itself.

We are using SHA-3 256 for this. The current implementation looks like this. What are some flaws of this process while still keeping it's simplicity.

### Master Password

This is a strong passphrase that you should be able to memorize easily. However it should be very difficult to guess.

### Modifier

This is a simple implementation of a salt. We are leaving this vague and open on purpose to see some use cases.

This could be as simple as the `{service-name}`. But in some specific cases this could be `{service-name} + {username} + {version}`

```typescript
/// Password Generation
MasterPassword
    .hash()
    .concatenate(modifier)
    .hash()
    .getFirst16()
    .spaceEvery4()
```
