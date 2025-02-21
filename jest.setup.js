import '@testing-library/jest-dom'

// Mock the paraglide messages
jest.mock('@/paraglide/messages', () => ({
  m: {
    input_placeholder: () => 'Enter your name',
    submit_form: () => 'Submit',
  },
}))
