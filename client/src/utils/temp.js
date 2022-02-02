const templateId = '61f2df7f1ea35c2faffb005a'
const endpoint = `localhost:3001/api/email-template/${templateId}`
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoic2FtdWVsamFzb25mb3hAZ21haWwuY29tIiwiX2lkIjoiNjFmMmRmN2YxZWEzNWMyZmFmZmIwMDRmIiwiYWNjb3VudEtleSI6IlUyRnNkR1ZrWDE5OHU2R0d4VE0vYi8xUDV1dWFZTlF2YVVwUTBTdStOTkU9In0sImlhdCI6MTY0MzQwODM3OSwiZXhwIjoxNjQzNDk0Nzc5fQ.vQ2LSWAHMnGjELu2ZPPtqd88uw-T02nHqjFXZx4ntck'
const server = 'localhost:3000'
export const testString = `${server}/react-email-templates?endpoint=${endpoint}&token=${token}`
