set -e

# latest commit
LATEST_COMMIT=$(git rev-parse HEAD)

API_COMMIT=$(git log -1 --format=format:%H --full-diff packages/api)
SOCKET_COMMIT=$(git log -1 --format=format:%H --full-diff packages/socket)

echo $API_COMMIT

if [ $API_COMMIT = $LATEST_COMMIT ];
    then
        echo "files in API has changed"
        .circleci/do_something.sh
elif [ $SOCKET_COMMIT = $LATEST_COMMIT ];
    then
        echo "files in SOCKET has changed"
        .circleci/do_something_else.sh
else
     echo "no folders of relevance has changed"
     exit 0;
fi