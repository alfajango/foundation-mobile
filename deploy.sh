#!/usr/bin/env bash
 
echo "Deploying site"

#s3cmd sync --acl-public --reduced-redundancy --cf-invalidate docs/* s3://foundation-mobile-demo
s3cmd sync --acl-public --reduced-redundancy docs/* s3://foundation-mobile-demo

echo $'\e[0;32mDone'
