import pandas as pd
import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore

cred = credentials.Certificate("./ServiceAccountKey.json")
app = firebase_admin.initialize_app(cred)

store = firestore.client()

file_path = "Film_Locations_in_San_Francisco.csv"
collection_name = "movies"

df = pd.read_csv(file_path)

result = df.groupby('Title')['Locations'].apply(list)

doc_ref = store.collection(collection_name)

for movie in result.iteritems():
    doc_ref.add({'title': movie[0], 'locations': list(set(movie[1]))})

print('Done')
