/**
 * createAsyncThunk içinde kullanılmak üzere tasarlanmış bir yardımcı fonksiyon.
 * API isteğini (promise) alır ve try-catch bloğunu yönetir.
 * @param {Promise} promise - Gerçekleştirilecek axios isteği (örn: axios.post(...)).
 * @param {object} thunkAPI
 * @returns Başarılı olursa response.data, hata olursa rejectWithValue döner.
 */

export const handleAsyncThunk = async (promise, thunkAPI) => {
  try {
    const response = await promise;
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
};
