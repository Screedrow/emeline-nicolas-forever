import { supabase } from '../../lib/supabase'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName } = req.body
    
    try {
      const { data, error } = await supabase
        .from('guests')
        .select('*')
        .ilike('first_name', `%${firstName}%`)
      
      if (error) throw error
      
      // Formate les résultats pour l'affichage
      const formatted = data.map(guest => ({
        id: guest.id,
        display_name: `${guest.first_name} ${guest.last_name.charAt(0)}.`,
        family_group_id: guest.family_group_id
      }))
      
      res.status(200).json(formatted)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}