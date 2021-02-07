#!/bin/bash

npm run migrate -- 0
npm run migrate
psql -U postgres -d waitcash -f ./seeds/seed.tables.sql