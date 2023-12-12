import express from 'express'
import payload, { getPayload } from 'payload';
import { nextApp, nextHandler } from './next-utils';
import { getPayloadClient } from './get-payload';

const app = express()
const PORT = Number(process.env.PORT) || 3000


const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms: any) => {
                cms.logger.info(`Admin URL ${cms.getAPIURL()}`)
            },
        },
    })
    app.use((req, res) => nextHandler(req, res))

    nextApp.prepare().then(() => {
        payload.logger.info('Next.js started')

        app.listen(PORT, async () => {
            payload.logger.info(
                `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
            )
        })
    })
}

start()

